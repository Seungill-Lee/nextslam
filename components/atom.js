import { atom } from "recoil";

export const bgmPlayerID = atom({
    key: "bgmPlayerID",
    default: 0
})

export const bgmPlaying = atom({
    key: "bgmPlaying",
    default: true
})


export const bgmPlayError = atom({
    key: "bgmPlayError",
    default: false
})