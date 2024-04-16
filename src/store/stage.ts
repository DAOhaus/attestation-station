import { atom } from 'jotai'

export enum Stage {
    uploading = 0,
    describe,
    mint,
    confirm
}

export const stageAtom = atom(Stage.uploading);