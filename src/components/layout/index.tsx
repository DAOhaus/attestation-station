import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Head } from "./Head";
import { PushNotification } from "../PushNotification";


interface Props {
  children: ReactNode;
}

const confetti = {
  light: {
    primary: "4299E1", // blue.400
    secondary: "BEE3F8", // blue.100
  },

  dark: {
    primary: "1A365D", // blue.900
    secondary: "2A4365", // blue.800
  },
};

export function Layout(props: Props) {
  return (
    <>
      {/* <PushNotification /> */}
      <Head />
      <Box
        margin="0 auto"
        minH="100vh"
        backgroundColor={"#E5E2FF"}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"180%"}
        css={{
          backgroundImage: "url(background-circle.png)",
          backgroundPositionX: "center",
          backgroundPositionY: "25%"
        }}
      >
        <Header />
        {props.children}
        {/* <Footer /> */}
      </Box>
    </>
  );
}
