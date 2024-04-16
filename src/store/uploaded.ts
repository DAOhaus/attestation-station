import { atom } from "jotai";

export const uploadedImgAtom = atom(`url(${typeof window !== "undefined" ? window.location.origin : ""}/example-item.png)`);