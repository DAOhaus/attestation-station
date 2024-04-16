import { atom } from 'jotai'

export enum Stage {
    uploading = 0,
    describe,
    mint,
    attest,
    liquidity
}

export const stageAtom = atom(Stage.uploading);