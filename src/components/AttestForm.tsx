'use client'

import { Box, Text, Button, Badge } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react";
import { getAttribute } from "../reusables/utils";
import useGlobalState, { nft } from "../hooks/useGlobalState";
import {
    SignProtocolClient,
    SpMode,
    EvmChains
} from "@ethsign/sp-sdk";
import deployedContracts from "../abi/deployedContracts";
import { useContractRead, useContractWrite, usePublicClient, useWalletClient } from "wagmi";
import { singleUpload } from "../reusables/fleekUpload"
import { queryAttestations, getAttestation } from '../reusables/attestationUtils'

const sampleAttestationResponse = {
    "attestationId": "0xc7",
    "fullId": "onchain_evm_11155111_0x51",
    "txHash": "0xd1a54e7372bbc9023bcc6118fe97887970ef15c1ac43712221bf1e6cc52a8999",
    "indexingValue": "0x4bd3d896cf186347b37cece94967aa9a9f84c2ae"
}


export const AttestForm = () => {
    const [nftData, setNftData] = useGlobalState(nft)
    const [loadingStates, setLoadingStates] = useState()
    const { data: walletClient } = useWalletClient()
    const chainId = walletClient?.chain.id || ''
    const address = walletClient?.account.address
    const publicClient = usePublicClient()
    const NftFactory = deployedContracts[chainId]?.NFTMNTR1776

    const tokenURI = useContractRead({
        address: NftFactory?.address,
        abi: NftFactory?.abi,
        functionName: 'tokenURI',
        args: [nftData.nftId]
    }).data
    console.log('attest', tokenURI, nftData.nftId, nftData)

    const { writeAsync: setTokenURI } = useContractWrite({
        address: NftFactory?.address,
        abi: NftFactory?.abi,
        functionName: 'setTokenURI',
    })

    const pdfAttribute = getAttribute('pdf', nftData.attributes)
    const tokenAttribute = getAttribute('linked token', nftData.attributes)

    const fetch = async () => {
        const attestationData = await getAttestation(sampleAttestationResponse.fullId)
        console.log('returned attestation', attestationData)
    }

    const query = async () => {
        const results = await queryAttestations(address)
        console.log('query results', results)
    }
    const createNotaryAttestation = async (signer: string) => {
        setLoadingStates(true)
        try {
            const client = new SignProtocolClient(SpMode.OnChain, {
                chain: process.env.NODE_ENV === 'development' ? EvmChains.sepolia : EvmChains.mainnet,
            });
            const attestationData = {
                nftAddress: NftFactory.address,
                nftId: nftData.nftId,
                documentHash: pdfAttribute?.value || '',
                tokenAddress: nftData.erc20.deployedTokenAddress
            }
            console.log('create attestation & request metadata', attestationData, tokenURI)
            const attestationResponse = await client.createAttestation({
                schemaId: "0x51",
                data: attestationData,
                indexingValue: signer?.toLowerCase()
            })
            const { data: metadataResponse } = await axios.get(tokenURI).catch(error => {
                console.log(error);
                throw 'HTTP Request Error';
            });
            console.log('attestation, metadata', attestationResponse, metadataResponse)
            const fullAttestationId = `onchain_evm_${chainId}_${attestationResponse.attestationId}`
            metadataResponse.attributes.push({
                trait_type: 'attestation',
                value: {
                    ...attestationResponse,
                    fullAttestationId
                }
            })
            const _update = await singleUpload(JSON.stringify(metadataResponse), nftData.name + '-attestation')
            const updatedMetadataHash = _update.cid.toString()
            console.log('! updateHash', updatedMetadataHash)

            const { hash } = await setTokenURI({ args: [nftData.nftId, updatedMetadataHash] })
            const receipt = await publicClient?.waitForTransactionReceipt({ hash: hash });
            console.log('! write response', receipt, hash)
            setNftData({
                ...nftData,
                attestation: {
                    ...attestationResponse,
                    fullAttestationId
                }
            })
            setLoadingStates(false)
        } catch (error) {

            console.log('error during attestation')
            setLoadingStates(false)
        }


        // get existing metadata and add in new attestation attribute

    }

    return <Box>
        <Text mb={4} color={"gray"}>
            If you plan on changing any information about this NFT wait until you have finalized it to create an attestation
            using <a target="_blank" href="https://sign.global/" rel="noreferrer" style={{ textDecoration: 'underline' }}>Sign Protocol</a> as it
            will create a verifiable proof that the metadata has not been tampered with for future viewers.
        </Text>
        <Box >
            <Badge p={3} background={'white'} >
                nftAddress: {NftFactory?.address}<br></br>
                nftId: {BigInt(nftData?.nftId || '').toString()}<br></br>
                documentHash: {nftData?.fileHash || ''}<br></br>
                tokenAddress: {nftData?.erc20?.deployedTokenAddress || ''}
            </Badge>
            {nftData?.attestation?.txHash && <Badge p={1} size="sm">🥳 {nftData?.attestation?.txHash}</Badge>}
        </Box>
        <Button mt={4} background={'teal'} style={{ pointerEvents: loadingStates ? 'none' : 'auto' }} onClick={() => createNotaryAttestation(address as `0x${string}`)}>{loadingStates ? 'Attesting...' : 'Attest'}</Button>
        {/* <Button onClick={query}>Find</Button>
                <Button onClick={fetch}>Get {sampleAttestationResponse.attestationId} </Button> */}
    </Box>

}