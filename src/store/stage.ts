import { atom } from 'jotai'

export enum Stage {
    uploading = 0,
    describe,
    tokenize,
    attest,
    confirm,
    liquidity
}

export const stageAtom = atom(Stage.uploading);