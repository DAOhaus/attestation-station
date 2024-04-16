import { Text, Box, Img, Stack, HStack, Tag, TagLeftIcon, TagLabel, Divider, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, Spinner } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FaTag } from "react-icons/fa"
import { IoDiamondOutline } from "react-icons/io5"
import { SellModel } from "./SellModel"
import { useNFTJson } from "../hooks/useNFTJson"
import { useEffect, useState } from "react"
import { request } from "../Reusables/request"

export const ItemCard = ({ metadata, isMarket = false, tokenId }: { isMarket?: boolean, metadata?: string, tokenId: number }) => {
    let { data: nftJson } = useNFTJson(metadata);
    if (!nftJson) nftJson = {
        name: "Martha Jackson’s Mens Silver Bracelet",
        category: "Jewellery",
        condition: "Acceptable",
        description: "",
        image: "/example-item.png"
    }
    const [imgSrc, setImg] = useState("")
    useEffect(() => {
        if (!nftJson || !nftJson.image.includes("ipfs")) return;
        request<{ data: string }>(`/api/get-ipfs-image?cid=` + nftJson.image).then(data => {
            setImg(data.data)
        })
    }, [setImg, nftJson.image])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter();

    return <Stack
        shadow={"lg"}
        cursor={"pointer"}
        onClick={() => {
            isMarket ?
                router.push(`/product/${metadata?.replace("ipfs://", "")}?market=true`) :
                router.push(`/product/${metadata?.replace("ipfs://", "")}`)
        }}
        h={isMarket ? "400px" : "360px"}
        w="276px"
        overflow={"hidden"}
        background={"#E7E8FF"}
        borderRadius={"10px"}
        pos={"relative"}
    >
        <Stack
            p={"12px"}
            pb={0}
            gap={2}
        >
            <Box w={"full"} h="196.941px">
                {imgSrc ? <Img
                    rounded={"10px"}
                    objectFit={"cover"}
                    src={imgSrc} w={"full"} h={"full"} />
                    : <Spinner />}
            </Box>
            <Text >{nftJson.name}</Text>

            <HStack spacing={4}>
                {[nftJson.category, nftJson.condition].map((name) => (
                    <Tag background={"transparent"} key={name} variant='subtle' colorScheme='gray' border={"1px solid black"}>
                        <TagLeftIcon boxSize='12px' as={FaTag} />
                        <TagLabel>{name}</TagLabel>
                    </Tag>
                ))}
            </HStack>

            {isMarket && <Divider borderColor={"#CBCCE0"} />}

            {isMarket && <HStack fontWeight={"bold"} fontSize="22px">
                <IoDiamondOutline width={"full"} height={"full"} />
                <Text>$250</Text>
            </HStack>}
        </Stack>
        {isMarket ?
            <Button rounded={0} h={"45px"} pos={"absolute"} bottom={0} w={"full"}>
                Buy Asset
            </Button> :
            <Button isLoading={!nftJson} onClick={(e) => {
                e.stopPropagation();
                onOpen();
            }} rounded={0} h={"45px"} pos={"absolute"} bottom={0} w={"full"}>
                List for Sale
            </Button>
        }

        {nftJson && <SellModel tokenId={tokenId} nftJson={nftJson} isOpen={isOpen} onClose={onClose} src={imgSrc} />}
    </Stack>

}