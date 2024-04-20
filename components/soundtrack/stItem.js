'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import TestPlayer from "./bgmPlayer.js";
import { useRecoilState } from "recoil";
import { bgmPlayerID,bgmPlaying } from "../atom.js"
import scss from "./stitem.module.scss";


export default function STItem(props) {
    const [playID,setPlayID] = useRecoilState(bgmPlayerID)
    const [playing,setPlaying] = useRecoilState(bgmPlaying)

    return (
        <li className={playID == props.trackNum ? scss["active"] : ""}><button type="button" onClick={() => {setPlayID(props.trackNum); setPlaying(true)}}>{props.songTit}</button></li>
    )
}