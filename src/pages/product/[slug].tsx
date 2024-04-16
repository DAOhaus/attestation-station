import {
  Text,
  Grid,
  Box,
  Center,
  Image,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Stack,
  HStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  useDisclosure,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { uploadedImgAtom } from "../../store/uploaded";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaTag } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { SellModel } from "../../components/SellModel";
import { BsStars } from "react-icons/bs";
import { chatAtom, chatOpenAtom } from "../../store/chat";
import { useNFTJson } from "../../hooks/useNFTJson";
import { useEffect, useState } from "react";
import { request } from "../../Reusables/request";
import { cancelListing } from "../../lib/marketplace";

const Product = () => {
  const router = useRouter();
  const isMarket = router.query.market === "true";

  const metadata = router.query.slug as string;
  let { data: nftJson } = useNFTJson(metadata);
  if (!nftJson)
    nftJson = {
      name: "Martha Jackson’s Mens Silver Bracelet",
      category: "Jewellery",
      condition: "Acceptable",
      description:
        "This exquisite piece radiates brilliance with its immaculate facets, ensuring a mesmerizing sparkle that captivates every gaze. Set in a refined platinum band, this ring is a symbol of enduring love and sophistication. Elevate your moments with this statement piece, a celebration of exceptional craftsmanship and the pure beauty of a flawless diamond",
      image: "/example-item.png",
    };

  const [imgSrc, setImg] = useState(isMarket ? "/example-item.png" : "");
  useEffect(() => {
    if (!nftJson || !nftJson.image.includes("ipfs")) return;
    request<{ data: string }>(`/api/get-ipfs-image?cid=` + nftJson.image).then(
      (data) => {
        setImg(data.data);
      }
    );
  }, [setImg, nftJson?.image]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chatId, setChatId] = useAtom(chatAtom);
  const [chatOpen, setChatOpen] = useAtom(chatOpenAtom);

  if (!nftJson) return <Spinner />;
  return (
    <Grid w={"100vw"} h="100vh" templateColumns="repeat(2, 1fr)" gap={0}>
      <Box
        backgroundImage={imgSrc}
        backgroundSize={"contain"}
        backgroundPosition={"center"}
      />
      <Box w={"full"} h={"full"} pos="relative" backgroundColor={"#E7E8FF"}>
        <Stack mt={"100px"} p={8} gap={4}>
          <Link href={isMarket ? "/market" : "/assets"}>
            <Text cursor="pointer" _hover={{ textDecoration: "underline" }}>
              <ArrowBackIcon mr={2} />
              {isMarket ? "MARKET" : "YOUR ASSETS"}
            </Text>
          </Link>
          <Text fontSize={"35px"}>{nftJson.name}</Text>

          <HStack spacing={4}>
            {[nftJson.category, nftJson.condition].map((name) => (
              <Tag
                background={"transparent"}
                key={name}
                variant="subtle"
                colorScheme="gray"
                border={"1px solid black"}
              >
                <TagLeftIcon boxSize="12px" as={FaTag} />
                <TagLabel>{name}</TagLabel>
              </Tag>
            ))}
          </HStack>

          {isMarket && (
            <HStack fontWeight={"bold"} fontSize="35px">
              <IoDiamondOutline width={"full"} height={"full"} />
              <Text>$785.3</Text>
            </HStack>
          )}

          <Box>
            <Text mb={2} fontWeight={"bold"}>
              Description
            </Text>
            <Text>{nftJson.description}</Text>
          </Box>

          <Box>
            <Text mb={2} fontWeight={"bold"}>
              Owned by
            </Text>
            <HStack>
              <HStack
                py={"9px"}
                px={"12px"}
                borderRadius={"9px"}
                bg={"rgba(0, 8, 79, 0.05)"}
                w={"fit-content"}
              >
                <Image display={"inline"} src="/avatar.png" />
                <Text> exwhyzee.eth</Text>
              </HStack>
              <Link
                onClick={() => {
                  setChatId(
                    "89f7b382b9b1496dca2b9a94ef87c80dd102db05dcb40b165fabfab28770fd55"
                  );
                  setChatOpen(true);
                }}
              >
                <HStack
                  cursor={"pointer"}
                  py={"9px"}
                  px={"12px"}
                  borderRadius={"9px"}
                  bg={"transparent"}
                  _hover={{ textDecoration: "underline" }}
                  border={"2px solid #DBDDF6"}
                  w={"fit-content"}
                >
                  <Image display={"inline"} src="/chat.png" />
                  <Text> Chat with Owner</Text>
                </HStack>
              </Link>
            </HStack>
          </Box>
        </Stack>

        <Center mt="32"></Center>
        <Box
          w={"full"}
          pos={"absolute"}
          bottom={0}
          p={8}
          borderTop={"1px solid #CBCCE0"}
        >
          {isMarket ? (
            <HStack>
              <Button>
                <BsStars />
                <Text ml={2}>Buy Asset</Text>
              </Button>
              <Button
                bg={"transparent"}
                border={"2px solid #000"}
                color={"black"}
                _hover={{ bg: "gray.100" }}
              >
                <BsStars />
                <Text ml={2}>Make an Offer</Text>
              </Button>
            </HStack>
          ) : (
            <>
              <Button onClick={onOpen}>List for Sale</Button>
            </>
          )}
        </Box>
      </Box>

      {nftJson && (
        <SellModel
          nftJson={nftJson}
          isOpen={isOpen}
          onClose={onClose}
          src={imgSrc}
        />
      )}
    </Grid>
  );
};

export default Product;
