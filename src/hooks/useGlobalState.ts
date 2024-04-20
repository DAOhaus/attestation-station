
export const nft = createGlobalState({
  "file": {
    "path": "tonynacumoto4.png"
  },
  "imageUrl": "blob:http://localhost:3000/3d2fa25f-6cd9-4d48-8473-b63a6487c59b",
  "name": "Tony Nacu Token",
  "category": "Art",
  "description": "short description",
  "0:display_type": "first attribute",
  "0:value": "first value",
  "erc20": {
    "name": "Token Tracker",
    "symbol": "TTT",
    "supply": "100000"
  },
  "amm": {
    "assetAmount": "100",
    "stableAmount": "100",
    "assetValue": 10000
  }
})
function createGlobalState(initState) {
  const prototype = {
    data: { state: initState || null, reRenderFns: [] },

    get() {
      return this.data.state;
    },

    set(newState) {
      if (newState === this.data.state) return;
      this.data.state = newState;
      this.data.reRenderFns.forEach((reRender) => reRender());
      return this;
    },

    joinReRender(reRender) {
      if (this.data.reRenderFns.includes(reRender)) return;
      this.data.reRenderFns.push(reRender);
    },

    cancelReRender(reRender) {
      this.data.reRenderFns = this.data.reRenderFns.filter(
        (reRenderFn) => reRenderFn !== reRender
      );
    },
  };

  return Object.freeze(Object.create(prototype));
}

// ##################################
import { useState, useEffect } from "react";

export default function useGlobalState(globalState) {
  const [, set] = useState(globalState.get());
  const state = globalState.get();
  const reRender = () => set({});

  useEffect(() => {
    globalState.joinReRender(reRender);
    return () => {
      globalState.cancelReRender(reRender);
    };
  });

  function setState(newState) {
    globalState.set(newState);
  }

  return [state, setState];
}
