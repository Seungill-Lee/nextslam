'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import scss from "./testPlayer.module.scss";
import { useRecoilState } from "recoil";
import { trackNum } from "../atom.js"

export default function TestPlayer() {
    const [count] = useRecoilState(trackNum)

    return (
        <div id={scss.playlist}>
            {count}
        </div>
    )
}