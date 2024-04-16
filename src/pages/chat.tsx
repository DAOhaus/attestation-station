import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const PushChat = dynamic(() => import('../components/PushChat'), {
    loading: () => <p>Loading...</p>,
})

const Chat = () => {
    const router = useRouter();
    return <Box paddingTop={"150px"} px={"100px"} >
        <PushChat account={router.query.account as string} />
    </Box>
}
export default Chat;