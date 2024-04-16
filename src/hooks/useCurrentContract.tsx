import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { getDeployedContract } from "../lib/utils";

export function useCurrentContract() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const [contract, setContract] = useState<string>();

  useEffect(() => {
    if (!address || !chain) {
      return;
    }
    setContract(getDeployedContract(address, chain.id));
  }, [chain, address]);

  return contract as `0x${string}`;
}
