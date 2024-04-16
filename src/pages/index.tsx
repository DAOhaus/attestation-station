import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {
  Text,
  Box,
  Button,
  Flex,
  Container,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { createRef, useCallback, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAtom } from "jotai";
import { Stage, stageAtom } from "../store/stage";
import { ListingForm } from "../components/ListingForm";
import QRCode from "react-qr-code";
import { request } from "../Reusables/request";
import { uploadedImgAtom } from "../store/uploaded";
import { getOrCreateSafe, initAuthKit } from "../lib/safe-kit";
import { usePriceFeeds } from "../hooks/usePriceFeed";

const Home: NextPage = () => {
  const [stage, setStage] = useAtom(stageAtom);
  const [uploadedImg, seUploadedImg] = useAtom(uploadedImgAtom);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  /*useEffect(() => {
    (async () => {
      const web3AuthModalPack = await initAuthKit();
      const safe = await getOrCreateSafe(web3AuthModalPack);
      await web3AuthModalPack.signOut();
    })();
  }, []);*/

  const onDrop = useCallback(async (acceptedFiles: any) => {
    setStage(Stage.describe);

    // setFiles(acceptedFiles);
    // if (address) {
    //   //console.log(address);
    //   onApproveOpen();
    //   //console.log(acceptedFiles);
    // } else {
    //   onApproveOpen();
    //   onConnectOpen();
    // }
  }, []);

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
          <Text my={2} fontSize="2xl">
            a secure digital notary for your rwa nfts
          </Text>

          {/* <Button my={8} onClick={onOpen}>
            Take a photo
          </Button>
          <h2>OR</h2> */}
          <Box w={"full"} mt={3}>
            <Tabs align='center' variant='soft-rounded' colorScheme='gray'>
              <TabList>
                <Tab>Existing NFT</Tab>
                <Tab>Create NFT</Tab>
              </TabList>
              <TabPanels>
                <TabPanel mt={5}>
                  <InputGroup>
                    <InputLeftAddon>NFT Address</InputLeftAddon>
                    <Input type='text' backgroundColor="white" placeholder='0x1234...' />
                  </InputGroup>
                  <InputGroup mt={2}>
                    <InputLeftAddon>NFT ID</InputLeftAddon>
                    <Input type='text' backgroundColor="white" placeholder='32' />
                  </InputGroup>
                  <Button backgroundColor={"green"} mt={5}>Start</Button>
                </TabPanel>
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
                      Drag & Drop a file here to get started!
                    </Text>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </main>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Scan the QRCode to take photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={window.location.href + "/camera"}
              viewBox={`0 0 256 256`}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isLoading={isLoading}
              colorScheme="blue"
              mr={3}
              onClick={async () => {
                setIsLoading(true);
                const img = await request<{ data: string }>(
                  "/api/upload-image",
                  "GET"
                );
                seUploadedImg(img.data);
                setIsLoading(false);
                setStage(Stage.describe);
              }}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Home;
