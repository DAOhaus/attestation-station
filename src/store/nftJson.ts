import { atom } from "jotai";
import { Offer } from "../types";

export type NFTJson = {
    name: string,
    category: string
    condition: string
    description: string
    // price: number
    // currency: string
    image: string
}
export const nftJsonAtom = atom<NFTJson>({} as any as NFTJson);

export const marketListingAtom = atom<Offer[]>([]);