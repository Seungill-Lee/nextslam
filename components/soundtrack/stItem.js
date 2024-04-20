'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import TestPlayer from "./bgmPlayer.js";
import { useRecoilState } from "recoil";
import { bgmPlayerID } from "../atom.js"


export default function STItem(props) {
    const [trackNum,setTrackNum] = useRecoilState(bgmPlayerID)

    return (
        <li key={props.trackNum}><button type="button" onClick={() => setTrackNum(props.trackNum)}>{props.songTit}</button></li>
    )
}