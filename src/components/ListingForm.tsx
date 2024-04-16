import { Grid, Box, Center, Tabs, TabList, Tab, TabPanels, TabPanel, Button, Text, Textarea, Divider, AbsoluteCenter, Flex } from "@chakra-ui/react"
import { useAtom } from "jotai";
import { Stage, stageAtom } from "../store/stage";
import { uploadedImgAtom } from "../store/uploaded";
import { ConfirmForm } from "./ConfirmForm";
import { DescribeForm } from "./DescribeForm"
import { ValuesForm } from "./ValuesForm";
import { useRouter } from "next/router";
import { TokenizeForm } from "./TokenizeForm";
import useGlobalState, { nft } from "../hooks/useGlobalState";
import { FaCloudUploadAlt } from "react-icons/fa";
import { createRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const ListingForm = () => {
    const dropZoneRef: React.LegacyRef<HTMLDivElement> | undefined = createRef();
    const onDrop = useCallback(async (event: any) => {
        console.log('onDrop')
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const [nftData, setNftData] = useGlobalState(nft);
    const [stage, setStage] = useAtom(stageAtom);
    console.log('stage', stage)
    const router = useRouter();
    const [uploadedImg, seUploadedImg] = useAtom(uploadedImgAtom);
    const handleStageClick = (e) => {
        console.log(e.target.dataset.index, e)
        setStage(Number(e.target.dataset.index) + 1)
    }
    return <Grid w={"100vw"} h="100vh" templateColumns='repeat(2, 1fr)' gap={0}>
        <Box
            backgroundImage={uploadedImg}
            backgroundSize={"contain"}
            // backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
        />
        <Box w={"full"} h={"full"} pos="relative" backgroundColor={"#E7E8FF"}>
            <Center mt="32">
                <Tabs w={"full"} index={stage - 1} isLazy>
                    <TabList>
                        <Tab onClick={handleStageClick}>Describe</Tab>
                        <Tab id="2" onClick={handleStageClick}>Tokenize</Tab>
                        <Tab id="3" onClick={handleStageClick}>Attest</Tab>
                        {/* <Tab id="4" onClick={handleStageClick}>Liquidity</Tab> */}
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <DescribeForm />
                        </TabPanel>
                        <TabPanel>
                            <TokenizeForm />
                        </TabPanel>
                        <TabPanel>
                            <Box mt={4}>
                                <Text mb='8px'>Freeform Attestation:</Text>
                                <Textarea
                                    rows={8}
                                    backgroundColor={'white'}
                                    placeholder="An explination of what this token stands for, what it represents and/or any other important information you'd like to attach"
                                />
                                <Box position='relative' padding='10'>
                                    <Divider />
                                    <AbsoluteCenter px='4'>
                                        or
                                    </AbsoluteCenter>
                                </Box>
                                <input
                                    style={{ display: "none" }}
                                    {...getInputProps()}
                                    type="file"
                                    accept="*"
                                />
                                <Flex
                                    {...getRootProps()}
                                    w="full"
                                    cursor="pointer"
                                    ref={dropZoneRef}
                                    p="0"
                                    backdropFilter="blur(20px)"
                                    border="2px dashed #000"
                                    rounded="45px"
                                    minH={{ base: "20vh" }}
                                    bg="rgba(255, 255, 255, 0.09)"
                                    direction="column"
                                    transitionDuration="300ms"
                                    alignItems="center"
                                    _hover={{ background: "blackAlpha.100" }}
                                    justify="center"
                                    // py="10"
                                    mb="10"
                                >
                                    <FaCloudUploadAlt size="60px" />
                                    <Text fontWeight="normal" mt="2">
                                        Legal Contract PDF
                                    </Text>
                                </Flex>
                            </Box>
                        </TabPanel>
                        {/* <TabPanel>
                            <ValuesForm />
                        </TabPanel> */}
                        <TabPanel>
                            <ConfirmForm />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Center>
            <Box w={"full"} pos={"absolute"} right={0} bottom={0} p={8} borderTop={"1px solid #CBCCE0"} display={'flex'} justifyContent={'space-between'}>
                <div>
                    <Button mr={2} onClick={() => {
                        setStage(stage - 1)
                    }}>Back</Button>
                </div>
                <div>
                    {stage !== Stage.confirm && <Button onClick={() => {
                        setStage(stage + 1)
                    }}>Proceed</Button>}
                    {stage === Stage.confirm && <Button
                        onClick={() => {
                            router.push("/assets")
                        }}>See your Assets</Button>}
                </div>
            </Box>
        </Box>

    </Grid >
}