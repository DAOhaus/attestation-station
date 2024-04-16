import { useWalletClient } from "wagmi";
import { ChatView, ChatUIProvider, lightChatTheme } from "./push_inside";

const PushChat = ({ account }: { account?: string }) => {
  const { data: walletClient } = useWalletClient();

  return (
    // @ts-ignore
    <ChatUIProvider signer={walletClient ?? undefined} theme={lightChatTheme}>
      <ChatView
        chatId={account ?? "b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1"}
        limit={10}
        isConnected={true}
      // verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
      />
    </ChatUIProvider>
  );
}
export default PushChat;