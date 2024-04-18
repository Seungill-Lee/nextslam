'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import TestPlayer from "./testPlayer.js";


export default function STItem({ songTit,trackNum }) {
    return (
        <li><a href="javascript:void(0)" onClick={() => console.log(trackNum)}>{songTit}</a></li>
    )
}