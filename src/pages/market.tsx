import { Input, InputLeftElement, Text, Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Stack, InputGroup, Button, HStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { ItemCard } from "../components/ItemCard";
import { useAtom } from "jotai";
import { uploadedImgAtom } from "../store/uploaded";
import { SearchIcon } from "@chakra-ui/icons";
import { useAllListings } from "../hooks/useAllListings";
import { buyProduct, cancelListing } from "../lib/marketplace";
import { useNetwork, usePublicClient, useWalletClient } from "wagmi";

const Assets: NextPage = () => {
    const listings = useAllListings();
    const network = useNetwork();
    const { data: client } = useWalletClient();
    const publicClient = usePublicClient();

    const [uploadedImg, _] = useAtom(uploadedImgAtom);
    return <Box
    >
        <Center paddingTop={"150px"} pb={16} pos={"relative"}>
            <Stack alignItems={"center"}>
                <Text fontSize="45px" alignSelf={"center"}>
                    Discover Assets
                </Text>
                <Text fontSize="26px">
                    Explore, tokenize, and own a piece of the extraordinary
                </Text>
                <InputGroup outline={"none"} p={2} pos={"absolute"} bottom={-4} zIndex={1} bg="#E7E8FF" rounded={"10px"} w={"533px"} border="1px solid rgba(0, 0, 0, 0.16);" shadow={"sm"}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon mt={4} color='gray.300' />
                    </InputLeftElement>
                    <Input border={0} type='tel' placeholder='Search' />
                </InputGroup>
            </Stack>
        </Center>
        <Box
            minH={"100vh"}
            bg={"#E5E2FF"}
            px={8} pt={"50px"}
            pb={"100px"}
            w={"full"} >
            <Flex justifyContent="center" gap={12} flexWrap="wrap">
                {/* {listings.map((listing, i) => <ItemCard
                    isMarket
                    key={i}
                    metadata={listing.metaIpfs}
                    tokenId={listing.nftInfo.tokenId}
                />)} */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (i) => <ItemCard
                        isMarket
                        key={i} src={i === 1 && !uploadedImg.includes("example") ? uploadedImg : "./example-item.png"} />)}


            </Flex>
            <Stack>
                {listings.map((l,i) => {
                    return <HStack key={i}>
                        <Text>{l.seller}</Text>
                        <Button onClick={async () => {
                            await buyProduct(
                                l.offerId!,
                                network.chain?.id!,
                                client!,
                                publicClient
                            )
                            alert("buy succeed")
                        }}>
                            Buy
                        </Button>
                        <Button onClick={async () => {
                            await cancelListing(
                                l.offerId!,
                                network.chain?.id!,
                                client!,
                                publicClient
                            )
                            alert("cancel succeed")
                        }}>
                            Cancel
                        </Button>
                    </HStack>
                })}
            </Stack>
        </Box>
    </Box>
}

export default Assets;