import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {
  Text,
  Box,
  Button,
  Flex,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { createRef, useCallback, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAtom } from "jotai";
import { Stage, stageAtom } from "../store/stage";
import { ListingForm } from "../components/ListingForm";
import useGlobalState, { nft } from "../hooks/useGlobalState";

const Home: NextPage = () => {
  const [stage, setStage] = useAtom(stageAtom);
  const [nftData, setNftData] = useGlobalState(nft);

  const handleInputChange = (e) => {
    console.log('change', e.target.value)
    setNftData({ ...nftData, [e.target.id]: e.target.value })
  }

  const onDrop = useCallback(async (event: any) => {
    if (nftData.address) {
      console.log('existing', event)
      setStage(Stage.attest);
    } else {
      console.log('create', event)
      let imageUrl;
      try {
        const isPdf = event[0].type.includes('pdf')
        const defaultPDFImage = 'https://ipfs-gateway.legt.co/ipfs/bafybeicqz376dgkrmrykjcrdafclqke4bzzqao3yymbbly4fjr4kdwttii'
        imageUrl = isPdf ? defaultPDFImage : URL.createObjectURL(event[0]);
      } catch (error) { }
      setNftData({ file: event[0], imageUrl })
      setStage(Stage.describe);
    }
  }, [nftData, setStage, setNftData]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const dropZoneRef: React.LegacyRef<HTMLDivElement> | undefined = createRef();

  if (stage !== Stage.uploading) {
    return <ListingForm />;
  }

  // it's uploading staging
  return (
    <Container maxW="container.md">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            where{" "}
            <Text display={"inline"} fontFamily="cursive">
              digital
            </Text>{" "}
            meets{" "}
            <Text display={"inline"} fontFamily="cursive">
              physical
            </Text>
          </h1>
          <Text my={2} fontSize="2xl" textAlign={'center'}>
            securely notarize your rwa nft with a cyrptographic attestation
          </Text>
          <Box w={"full"} mt={3}>
            <Tabs align='center' variant='soft-rounded' colorScheme='gray'>
              <TabList>
                <Tab>Create NFT</Tab>
                <Tab>Existing NFT</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
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
                    mt="6"
                    backdropFilter="blur(20px)"
                    border="2px dashed #000"
                    rounded="45px"
                    minH={{ base: "50vh", xl: "40vh" }}
                    bg="rgba(255, 255, 255, 0.09)"
                    direction="column"
                    transitionDuration="300ms"
                    alignItems="center"
                    _hover={{ background: "blackAlpha.100" }}
                    justify="center"
                    py="10"
                    mb="10"
                  >
                    <FaCloudUploadAlt size="60px" />
                    <Text fontWeight="normal" mt="2">
                      Upload a PDF or Image of your NFT to get started!
                    </Text>
                  </Flex>
                </TabPanel>
                <TabPanel mt={5}>
                  <InputGroup>
                    <InputLeftAddon>NFT Address</InputLeftAddon>
                    <Input id="address" type='text' backgroundColor="white" placeholder='0x1234...' onChange={handleInputChange} />
                  </InputGroup>
                  <InputGroup mt={2}>
                    <InputLeftAddon>NFT ID</InputLeftAddon>
                    <Input id="id" type='text' backgroundColor="white" placeholder='32' onChange={handleInputChange} />
                  </InputGroup>
                  {nftData.id && nftData.address && <Button backgroundColor={"green"} mt={5} id="existing_nft" onClick={onDrop}>Start</Button>}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </main>
      </div>
    </Container>
  );
};

export default Home;
