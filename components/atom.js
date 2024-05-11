import { atom } from "recoil";

//BGM 플레이어 관련
export const bgmPlayerID = atom({
    key: "bgmPlayerID",
    default: 0
})
export const bgmPlaying = atom({
    key: "bgmPlaying",
    default: "Stop" //Play, Pause, Error, Ready, Stop
})

//방명록 관련
export const gbItemID = atom({
    key: "gbItemID",
    default: 0
})
export const gbItemMode = atom({
    key: "gbItemMode",
    default: "GET" //GET, POST, PATCH, DELETE
})