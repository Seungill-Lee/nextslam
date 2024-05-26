import { atom } from "jotai";

//BGM 플레이어 관련
export const bgmPlayerID = atom(0)
export const bgmPlaying = atom("Stop")

//관리자 인증 관련
export const registMasterAuth = atom(false)