import { atom } from 'jotai'

export enum Stage {
    uploading = 0,
    describe,
    tokenize,
    attest,
    mint,
    confirm,
}

export const stageAtom = atom(Stage.uploading);