import { atom } from 'jotai'

export enum Stage {
    uploading = 0,
    describe,
    tokenize,
    mint,
    attest,
    confirm,
}

export const stageAtom = atom(Stage.uploading);