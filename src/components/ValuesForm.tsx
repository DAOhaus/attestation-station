import { Box, HStack, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react"
import { useAtom } from "jotai";
import { nftJsonAtom } from "../store/nftJson";

export const ValuesForm = () => {
    const [nftJson, setNftJson] = useAtom(nftJsonAtom);

    return <Stack pl={2} pr={4} gap={4}>
        <Text
            color={"rgba(116, 122, 142, 0.50)"}>Set the value that speaks for your asset, tokenize with confidence</Text>
{/* 
        <HStack w={"full"} gap={4}>
            <Box flexGrow={1}>
                <Text mb={2}>Price</Text>
                <Input
                    onChange={(e) => setNftJson({ ...nftJson, price: Number(e.target.value) })}
                    backgroundColor={"#D8DAF6"}
                    placeholder="$16,400"></Input>
            </Box>
            <Box flexGrow={1}>
                <Text mb={2}>Currency</Text>
                <Select
                    onChange={(e) => setNftJson({ ...nftJson, currency: e.target.value })}
                    backgroundColor={"#D8DAF6"}
                    placeholder='Select option'>
                    <option value='option1'>USDC</option>
                    <option value='option2'>ETH</option>
                </Select>
            </Box>
        </HStack> */}
        <Text>$123</Text>
    </Stack>

}