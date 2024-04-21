import { base, mainnet, sepolia } from 'viem/chains';

interface ChainData {
  [key: string]: any;
  linkedTokenKey: string;
  defaultPDFHash: string;
}
const chainData: ChainData = {
  linkedTokenKey: 'Linked Token',
  linkedPoolKey: 'Liquidity Pool',
  defaultPDFHash: 'bafybeicqz376dgkrmrykjcrdafclqke4bzzqao3yymbbly4fjr4kdwttii',
  11155111: {
    ...sepolia,
    rpc: `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_SEPOLIA}`,
    graph: 'https://api.thegraph.com/subgraphs/name/tonynacumoto/uniswap-v3-sepolia-legt',
    publicChatId: '583cb9542a56b27264e7376b3e62fa4dbc9268a6638e8f385b2ceace2d18cf44',
    privateChatId: 'e12462634069fdab6a3f09b364eea9a8ed04a3efbfd1fe0f49a4e5b1e2a60012',
    attestationRepository: '0x878c92FD89d8E0B93Dc0a3c907A2adc7577e39c5',
    attestationGraph: 'https://api.goldsky.com/api/public/project_cls8h0isrycgi01wfgmhv3hrf/subgraphs/sp-sepolia/v1.1.0/gn'
    // STABLE: 0x8A9F16CF0096ABC81070AA3E0d8517C9905Ff2Ef => just for reference, use deployed contract data in code
    // A:LOFT POOL: 0xacf60e6c708f5eacc2c274e523ffe5e28b014969 => just for reference
  },
  8453: {
    ...base,
    rpc: 'https://eth-sepolia.g.alchemy.com/v2/1CpEoNtdBVTXWfckIt7Po74oBOfAuXP_',
  },
  1: {
    ...mainnet,
    rpc: `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_MAINNET}`,
  },
};

export default chainData;
