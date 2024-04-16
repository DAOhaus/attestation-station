import { atom } from "jotai";

export const chatOpenAtom = atom(false);
export const chatAtom = atom<string | undefined>(undefined);