import { useState } from 'react'
import { Box, HStack, Input, Select, Stack, Text, Button, Textarea } from "@chakra-ui/react"
import useGlobalState, { nft } from "../hooks/useGlobalState";
import { debounce } from 'lodash';

export const DescribeForm = () => {
    const [attributeCount, setAttributeCount] = useState(0);
    const [nftData, setNftData] = useGlobalState(nft)
    console.log('describe form', nftData)
    const handleAttributeChange = debounce((e) => {
        const value = e.target.value
        const key = e.target.name
        console.log('e', value, key, e.target)
        setNftData({ ...nftData, [key]: value })
    }, 500)
    return <Stack pl={2} pr={4} gap={4}>
        <Text color={"gray"}>
            Describe your token and list usefull information about it.
            Adding additional attributes below will be stored in the metadata follwing the
            <a style={{ textDecoration: "underline" }} target="_blank" href="https://docs.opensea.io/docs/metadata-standards#attributes" rel="noreferrer"> OpenSea Standard</a>
        </Text>

        <Box>
            <Text mb={2}>Item name</Text>
            <Input
                onChange={(e) => setNftData({ ...nftData, name: e.target.value })}
                backgroundColor={"#D8DAF6"}
                placeholder="My Tokenized Asset"></Input>
        </Box>

        <Box flexGrow={1}>
            <Text mb={2}>Category</Text>
            <Select
                onChange={(e) => setNftData({ ...nftData, category: e.target.value })}
                backgroundColor={"#D8DAF6"}
                placeholder='Select option'>
                <option value='Art'>Art</option>
                <option value='Debt'>Debt</option>
                <option value='Watch'>Real Estate</option>
                <option value='Metal'>Precious Metal</option>
                <option value='Other'>Other</option>
            </Select>
        </Box>

        <Box>
            <Text mb={2}>Item Description</Text>
            <Textarea
                onChange={(e) => setNftData({ ...nftData, description: e.target.value })}
                minH={"150px"}
                backgroundColor={"#D8DAF6"}
                placeholder='This token represents my physical asset located at...' />
        </Box>
        {Array(attributeCount)
            .fill(0)
            .map((_, i) => <HStack key={i}>
                <Input name={`${i}:display_type`} type='text' placeholder='attribute' backgroundColor={"#D8DAF6"} onChange={handleAttributeChange} />
                <Input name={`${i}:value`} type='text' placeholder='value' backgroundColor={"#D8DAF6"} onChange={handleAttributeChange} />
            </HStack>)}

        <Button backgroundColor={'teal'} onClick={() => { setAttributeCount(attributeCount + 1) }}>+ Add Attribute</Button>
    </Stack>

}