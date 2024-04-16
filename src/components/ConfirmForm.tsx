import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Center, HStack, Input, Select, Spinner, Stack, Text, Textarea } from "@chakra-ui/react"
import confetti from "canvas-confetti"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useWalletClient } from "wagmi";
import { NFT_ABI } from "../abi/nft";

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export const ConfirmForm = () => {
    const { data: client } = useWalletClient();

    useEffect(() => {
        const win_effect = () => {
            confetti({
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                particleCount: randomInRange(50, 100),
                origin: { y: 0.6 },
                ticks: 3000,
                gravity: 2,
            });
        };
        win_effect();
    }, []);

    return <Stack pl={2} pr={4} gap={4}>
        <Center mt={"100px"}>
            <Box maxW={"100px"}>
                <img
                    src={"/success.png"}
                    width={"100%"}
                    height={"100%"}
                >
                </img>
            </Box>
        </Center>
        <Text
            align={"center"}
        >Your digital creation is now official.</Text>
        <Center>
            <Button
                maxW={"200px"}
                backgroundColor={"transparent"}
                border={"2px solid #000"}
                color={"#000"}
            ><ExternalLinkIcon mr={2} />View Transaction</Button>
        </Center>

    </Stack >

}