'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import TestPlayer from "./testPlayer.js";
import { useRecoilState } from "recoil";
import { trackNum } from "../atom.js"


export default function STItem(props) {
    const [count,setCount] = useRecoilState(trackNum)

    return (
        <li key={props.tkNum}><button type="button" onClick={() => setCount(props.tkNum)}>{props.songTit}</button></li>
    )
}