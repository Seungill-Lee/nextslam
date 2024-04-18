'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import scss from "./testPlayer.module.scss";

export default function TestPlayer({ trackNum }) {
    return (
        <div id={scss.playlist}>
            {trackNum}
        </div>
    )
}