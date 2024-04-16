import { useEffect, useRef, useState } from "react";
import { GateFiDisplayModeEnum, GateFiSDK } from '@gatefi/js-sdk'
import { Box, Button } from "@chakra-ui/react";
import { useWalletClient } from "wagmi";

export const Unlimit = () => {
    const embedInstanceSDK = useRef<GateFiSDK | null>(null);
    const [showIframe, setShowIframe] = useState(false) // state to control iframe visibility
    const { data: wallet } = useWalletClient();

    useEffect(() => {
        return () => {
            embedInstanceSDK.current?.destroy();
            embedInstanceSDK.current = null;
        };
    }, []);
    // Function to create a new embed SDK instance
    const createEmbedSdkInstance = () => {
        const randomString = require('crypto').randomBytes(32).toString('hex');
        if (typeof document !== 'undefined') {
            embedInstanceSDK.current = new GateFiSDK({
                merchantId: "dd5469a7-df87-44eb-80f8-112a06705ba7",
                displayMode: GateFiDisplayModeEnum.Embedded,
                nodeSelector: "#embed-button",
                isSandbox: true,
                walletAddress: wallet?.account.address,
                externalId: randomString,
                defaultFiat: {
                    currency: "USD",
                    amount: "30",
                },
                defaultCrypto: {
                    currency: "ETH"
                },
            })
        }

    }

    const handleOnClickEmbed = () => {
        console.log("handleOnClickEmbed", showIframe);
        if (showIframe) {
            embedInstanceSDK.current?.destroy();
            setShowIframe(false);
        } else {
            if (!embedInstanceSDK.current) {
                createEmbedSdkInstance();
            }
            embedInstanceSDK.current?.show();
            setShowIframe(true);
        }
    };
    if (!wallet?.account) return <></>;

    return <Box>
        <Box id="embed-button" pos={"fixed"} top={"20vh"} left={"30vw"} />
        <Button onClick={handleOnClickEmbed}>
            GateFi
        </Button>
    </Box>
}