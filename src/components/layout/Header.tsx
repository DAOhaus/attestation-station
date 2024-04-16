import React from "react";
import {
  Text,
  Flex,
  useColorModeValue,
  Spacer,
  Box,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
  useBreakpointValue,
  HStack,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Logo } from "../../Reusables/helper";
import { Unlimit } from "../Unlimit";
import { useRouter } from "next/router";
import { HiShoppingBag } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { useSubscribe } from "../../hooks/useSubscribe";

interface Props {
  className?: string;
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export function Header(props: Props) {
  const { isSubscribed, subscribe, isSubscribing, messages } = useSubscribe();

  const className = props.className ?? "";
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      zIndex={1000}
      className={className}
      color={useColorModeValue("gray.700", "gray.200")}
      borderRadius="96px"
      border={"1px solid #000"}
      background="rgba(255, 255, 255, 0.13)"
      backdropFilter={"blur(72.80000305175781px)"}
      opacity={1}
      px={2}
      py={2}
      mb={8}
      top={4}
      marginX={"16px"}
      pos="fixed"
      w="calc(100% - 32px)"
      alignItems="center"
    >
      <Flex flex={{ base: 2 }} justify={{ base: "center", md: "start" }}>
        <Link
          onClick={() => router.push("/")}
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Logo />
        </Link>
        {/* <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex> */}
      </Flex>

      <Spacer />

      <Flex alignItems="center" gap={4} mr={4}>
        {/* <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <HStack>
              <HiShoppingBag /> <Text>Assets</Text>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push("/market")} >Marketplace</MenuItem>
            <MenuItem onClick={() => router.push("/assets")} >Assets</MenuItem>
          </MenuList>
        </Menu> */}

        {/* <Unlimit />
        <Popover>
          <PopoverTrigger>
            <Button isLoading={isSubscribing} onClick={async () => {
              !isSubscribed && await subscribe();
            }}>
              <IoIosNotifications />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Notifications</PopoverHeader>
            <PopoverBody>
              <Stack>
                {messages.map(m => <Stack key={m.id} gap={1} borderBottom={"1px solid gray"}>
                  <Text fontWeight={"bold"}>{m.message.title}</Text>
                  <Text fontSize={"small"}>{m.message.body}</Text>
                </Stack>)}
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>*/}
        <ConnectButton
          accountStatus={{
            smallScreen: "address",
            largeScreen: "full",
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex >
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const linkHoverBackgroundColor = useColorModeValue("blue.200", "blue.900");
  return (
    <Stack direction={"row"} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  bg: linkHoverBackgroundColor,
                }}
              >
                <Text as="samp">
                  <Text as="b">{navItem.label}</Text>
                </Text>
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "bold",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Home",
  //   href: "/",
  //   children: [
  //     {
  //       label: 'Explore Decentralized Finance',
  //       subLabel: 'Trending DeFi Apps to inspire you',
  //       href: 'https://dappradar.com/rankings/category/defi',
  //     },
  //     {
  //       label: 'View wallet balance',
  //       subLabel: 'View your wallet full balance',
  //       href: 'https://etherscan.io/',
  //     },
  //   ],
  // },
  // {
  //   label: "Swap",
  //   href: "https://app.uniswap.org",
  // },
  // {
  //   label: "sign Messages",
  //   href: "/sign",
  // },
];