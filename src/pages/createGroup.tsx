import { Button } from "@chakra-ui/react";
import { useWalletClient } from "wagmi";
import { PushAPI } from "@pushprotocol/restapi";

const CreateGroup = () => {
  const { data: client } = useWalletClient();

  return <Button mt={"200px"} onClick={async () => {
    if (!client) return;
    // @ts-ignore
    const userAlice = await PushAPI.initialize(client, { env: "prod" });
    const createTokenGatedGroup = await userAlice.chat.group.create(
      "AtteStation 003",
      {
        description: "", // provide short description of group
        // image: "data:image/png;base64,iVBORw0K...", // provide base64 encoded image
        members: [], // not needed, rules define this, can omit
        admins: [], // not needed as per problem statement, can omit
        private: false,
        rules: {
          entry: {
            // permission object
            conditions: {
              // conditions object
              any: [
                // conditions namespace decider - Either group owner / admin invites the user or the user has $PUSH on Ethereum or Polygon
                {
                  // decider 1 - If admin or owner invites someone
                  any: [
                    {
                      // criteria 1
                      type: "PUSH",
                      category: "INVITE",
                      subcategory: "DEFAULT",
                      data: {
                        inviterRoles: ["ADMIN", "OWNER"],
                      },
                    },
                  ],
                },
                {
                  any: [
                    // decider 2 - If user has $PUSH on Ethereum or on Polygon
                    {
                      // criteria object
                      type: "PUSH", // define type that rules engine should go for
                      category: "ERC20", // define it's ERC20 token that you want to check, supports ERC721 as well
                      subcategory: "holder", // define if you are checking 'holder' or 'owner'
                      data: {
                        contract:
                          "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH
                        comparison: ">=", // what comparison needs to pass
                        amount: 1, // amount that needs to passed
                        decimals: 18, // the decimals for the token
                      },
                    },
                    {
                      // criteria object
                      type: "PUSH", // define type that rules engine should go for
                      category: "ERC20", // define it's ERC20 token that you want to check, supports ERC721 as well
                      subcategory: "holder", // define if you are checking 'holder' or 'owner'
                      data: {
                        contract:
                          "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1", // $PUSH address on ETH
                        comparison: ">=", // what comparison needs to pass
                        amount: 0, // amount that needs to passed
                        decimals: 18, // the decimals for the token
                      },
                    },
                  ],
                },
              ],
            },
          },
          // since we are not defining chat permissions, it means that any user who is part of the group can chat
        },
      },
    );
    console.log(createTokenGatedGroup)
  }}>Create</Button>
}

export default CreateGroup;