import { useState } from 'react'
import { Box, HStack, Input, Select, Stack, Text, Button, Textarea } from "@chakra-ui/react"
import useGlobalState, { nft } from "../hooks/useGlobalState";
import { groupByKeyValue } from '../reusables/utils';

export const DescribeForm = () => {
    const [nftData, setNftData] = useGlobalState(nft)

    const [attributeCount, setAttributeCount] = useState(groupByKeyValue(nftData).length);
    const handleAttributeChange = (e) => {
        const value = e.target.value
        const key = e.target.name
        setNftData({ ...nftData, [key]: value })
    }
    return <Stack pl={2} pr={4} gap={4}>
        <Text color={"gray"}>
            Describe your token and list usefull information about it.
            Adding additional attributes below will be stored in the metadata follwing the
            <a style={{ textDecoration: "underline" }} target="_blank" href="https://docs.opensea.io/docs/metadata-standards#attributes" rel="noreferrer"> OpenSea Standard</a>
        </Text>

        <Box>
            <Text mb={1}>NFT Name</Text>
            <Input
                value={nftData.name}
                onChange={(e) => setNftData({ ...nftData, name: e.target.value })}
                backgroundColor={"#D8DAF6"}
                placeholder="My Tokenized Asset"></Input>
        </Box>

        <Box flexGrow={1}>
            <Text mb={1}>Category</Text>
            <Select
                onChange={(e) => setNftData({ ...nftData, category: e.target.value })}
                value={nftData.category}
                backgroundColor={"#D8DAF6"}
                placeholder='Select option'>
                <option value='art'>Art</option>
                <option value='debt'>Debt</option>
                <option value='legal document'>Legal Document</option>
                <option value='watch'>Real Estate</option>
                <option value='precious metal'>Precious Metal</option>
                <option value='other'>Other</option>
            </Select>
        </Box>

        <Box>
            <Text mb={1}>NFT Description</Text>
            <Textarea
                value={nftData.description}
                onChange={(e) => setNftData({ ...nftData, description: e.target.value })}
                minH={"150px"}
                backgroundColor={"#D8DAF6"}
                placeholder='This token represents my physical asset located at...' />
        </Box>
        <Box>
            {!!attributeCount && <HStack><Text mb={1} width={'50%'}>Attribute</Text><Text width={'50%'} mb={1}>Value</Text></HStack>}
            {Array(attributeCount)
                .fill(0)
                .map((_, i) => <HStack key={i} mb={1}>
                    <Input value={nftData[`${i}:trait_type`]} name={`${i}:trait_type`} type='text' placeholder='attribute' backgroundColor={"#D8DAF6"} onChange={handleAttributeChange} />
                    <Input value={nftData[`${i}:value`]} name={`${i}:value`} type='text' placeholder='value' backgroundColor={"#D8DAF6"} onChange={handleAttributeChange} />
                </HStack>)}
        </Box>

        <Button backgroundColor={'teal'} onClick={() => { setAttributeCount(attributeCount + 1) }}>+ Add Attribute</Button>
    </Stack >

}