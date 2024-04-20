import { Box, Button, HStack, Input, Select, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text, useSteps } from "@chakra-ui/react"
import useGlobalState, { nft } from "../hooks/useGlobalState"
import { groupByKeyValue } from "../reusables/utils"
import deployedContracts from "../abi/deployedContracts"
import imageAndMetadataUpload from "../reusables/fleekDualUpload"
import { useContractWrite, useContractRead, usePublicClient, useWalletClient } from "wagmi"
import { getContractAddress } from "viem"
import { token1776Bytecode } from "../abi/bytecodes"
import { useState } from "react"
export const MintForm = () => {
    const [nftData, setNftData] = useGlobalState(nft)
    const [loadingStates, setLoadingStates] = useState<Object>({});
    const { amm = {}, erc20 = {}, attestation = {} } = nftData
    const attributes = groupByKeyValue(nftData)
    const publicClient = usePublicClient()
    const { data: walletClient } = useWalletClient()
    const chainId = walletClient?.chain.id || ''
    const address = walletClient?.account.address
    const TokenFactory = deployedContracts[chainId]?.TOKEN1776Factory
    const NftFactory = deployedContracts[chainId]?.NFTMNTR1776

    const { writeAsync: deployToken } = useContractWrite({
        address: TokenFactory?.address,
        abi: TokenFactory?.abi,
        functionName: 'deployToken',
        args: [
            erc20.name,
            erc20.symbol,
            [address],
            [erc20.supply + '000000000000000000']
        ]
    })

    const { writeAsync: mintToken } = useContractWrite({
        address: NftFactory?.address,
        abi: NftFactory?.abi,
        functionName: 'safeMint',
        args: [
            address,
            nftData.uploadHash
        ]
    })

    const { refetch: getLastDeployedToken } = useContractRead({
        address: TokenFactory?.address,
        abi: TokenFactory?.abi,
        functionName: 'getLastDeployedToken'
    })

    const _metadata = {
        name: nftData.name,
        description: nftData.description,
        attributes: groupByKeyValue(nftData, [
            nftData.category ? { trait_type: 'category', value: nftData.category } : null,
            erc20.deployedTokenAddress ? { trait_type: 'Linked Token', value: erc20.deployedTokenAddress } : null
        ]),
    };

    console.log('mint form', nftData)

    const steps = [
        {
            title: 'ERC20 Token',
            description: 'The liquid token linked to your NFT',
            body: <>
                <Text >
                    name: {erc20?.name}<br></br>
                    symbol: {erc20?.symbol}<br></br>
                    supply: {erc20?.supply}<br></br>
                </Text>
            </>,
            cta: <Button mt={4} background="teal" size="sm" onClick={async () => {
                setLoadingStates({ token: true })
                try {
                    const deployData = await deployToken()
                    const typedHash = deployData?.hash as `0x${string}`
                    const receipt = await publicClient?.waitForTransactionReceipt({ hash: typedHash });
                    const { data: deployedTokenAddress } = await getLastDeployedToken()
                    setNftData({ ...nftData, erc20: { ...erc20, deployedTokenAddress, receipt } })
                    setLoadingStates({ token: false })
                    setActiveStep(activeStep + 1)
                } catch (error) {
                    console.log('mint error', error)
                    setLoadingStates({ token: false })
                }
            }}>
                {loadingStates.token ? 'Mining...' : 'Mint'}
            </Button>,
            result: <Button mt={4} background="gray" size="sm">{erc20.deployedTokenAddress}</Button>
        },
        ...amm.assetAmount ? [{
            title: 'AMM Liquidity Pool',
            description: `Automated Market Maker on Uniswap for ${erc20?.symbol}`,
            body: <>
                <Text>
                    asset: {amm?.assetAmount}<br></br>
                    stable: {amm?.stableAmount}<br></br>
                    NFT value: {amm?.assetValue}<br></br>
                </Text>
            </>,
            cta: <Button mt={4} background="teal" size="sm">Create</Button>
        }] : [],
        {
            title: 'NFT Mint',
            description: 'Uploads Token, Pool & Metadata to IPFS for NFT',
            body: <>
                <Text>
                    name: {nftData.name}<br></br>
                    description: {nftData.description}<br></br>
                    attributes:
                    <Box pl={8}>
                        {_metadata.attributes.map((att, i) => <Text key={i}>{`${att.trait_type} : ${att.value}`}</Text>)}<br></br>
                    </Box>
                </Text>
            </>,
            cta: <Button mt={2} background="teal" size="sm" onClick={async () => {
                setLoadingStates({ nft: true })
                try {
                    const metadataHash = imageAndMetadataUpload(nftData.file, {
                        name: nftData.name,
                        description: nftData.description,

                    })
                    // const deployData = await deployToken()
                    // const typedHash = deployData?.hash as `0x${string}`
                    // const receipt = await publicClient?.waitForTransactionReceipt({ hash: typedHash });
                    // const { data: deployedTokenAddress } = await getLastDeployedToken()
                    // setNftData({ ...nftData, deployTokenId: '12' } })
                    setLoadingStates({ nft: false })
                    setActiveStep(steps.length)
                } catch (error) {
                    console.log('nft mint error', error)
                    setLoadingStates({ token: false })
                }
            }}>
                {loadingStates.nft ? 'Mining...' : 'Mint'}
            </Button>,
            result: <Button mt={4} background="gray" size="sm">{nftData.deployedId}</Button>
        },
    ]
    const { activeStep, setActiveStep } = useSteps({
        index: erc20.deployedTokenAddress ? 1 : 0,
        count: steps.length,
    })
    const handleStepChange = () => {
        console.log('active step', activeStep)
        setActiveStep(activeStep + 1)
    }
    return <Stack pl={2} pr={4} gap={4}>
        <Text color={"rgba(116, 122, 142, 0.50)"}>We'll walk you through the mint proccess which takes all the provided information into consideration</Text>
        <Stepper index={activeStep} orientation='vertical' gap='0' >
            {steps.map((step, index) => (
                <Step key={index} style={{
                    width: '100%',
                    opacity: `${activeStep === index ? 1 : .5}`,
                    pointerEvents: `${activeStep === index ? 'auto' : 'none'}`
                }}
                >
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'
                        width={'100%'}
                        mb={6}
                    >
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                        <Box mt={2} pl={4}> {step.body} </Box>
                        {activeStep === index ? step.cta : null}
                        {activeStep > index ? step.result : null}
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    </Stack>

}