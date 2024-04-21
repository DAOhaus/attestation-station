import { Grid, Box, Center, Tabs, TabList, Tab, TabPanels, TabPanel, Button } from "@chakra-ui/react"
import { useAtom } from "jotai";
import { Stage, stageAtom } from "../store/stage";
import { uploadedImgAtom } from "../store/uploaded";
import { ConfirmForm } from "./ConfirmForm";
import { DescribeForm } from "./DescribeForm"
import { AttestForm } from "./AttestForm"
import { MintForm } from "./MintForm";
import { useRouter } from "next/router";
import { TokenizeForm } from "./TokenizeForm";
import useGlobalState, { nft } from "../hooks/useGlobalState";

export const ListingForm = () => {
    const [nftData] = useGlobalState(nft);
    const [stage, setStage] = useAtom(stageAtom);
    const router = useRouter();
    const [uploadedImg] = useAtom(uploadedImgAtom);
    const handleStageClick = (e) => { setStage(Number(e.target.dataset.index) + 1) }

    // RENDER
    return <Grid w={"100vw"} h="100vh" templateColumns='repeat(2, 1fr)' gap={0}>
        <Box
            backgroundImage={nftData.imageUrl || uploadedImg}
            backgroundSize={"contain"}
            // backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            transition={'background-image 1s ease-in-out'}
        />
        <Box w={"full"} h={"full"} pos="relative" backgroundColor={"#E7E8FF"}>
            <Center mt="32">
                <Tabs w={"full"} index={stage - 1} isLazy>
                    <TabList>
                        <Tab onClick={handleStageClick}>Describe</Tab>
                        <Tab id="2" onClick={handleStageClick}>Tokenize</Tab>
                        <Tab id="3" onClick={handleStageClick}>Mint</Tab>
                        <Tab id="4" onClick={handleStageClick}>Attest</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <DescribeForm />
                        </TabPanel>
                        <TabPanel>
                            <TokenizeForm />
                        </TabPanel>
                        <TabPanel>
                            <MintForm />
                        </TabPanel>
                        <TabPanel>
                            <AttestForm />
                        </TabPanel>
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
                    {stage !== Stage.attest && <Button onClick={() => {
                        setStage(stage + 1)
                    }}>Proceed</Button>}
                    {(stage === Stage.confirm) && <Button
                        onClick={() => {
                            router.push("/assets")
                        }}>See your Assets</Button>}
                </div>
            </Box>
        </Box>
    </Grid >
}