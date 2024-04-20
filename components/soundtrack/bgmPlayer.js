'use client'

import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/soundcloud';
import scss from "./bgmPlayer.module.scss";
import { useRecoilState } from "recoil";
import { bgmPlayerID } from "../atom.js"

export default function BgmPlayer() {
    const [playID] = useRecoilState(bgmPlayerID)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div id={scss.playlist}>
            <ReactPlayer url='https://soundcloud.com/equalizer2k/men-of-destiny-gundam-0083-stardust-memory?in=sider-out-sider-out/sets/animation-ost&si=82cb5a87f6864599970b5b32b0c068c6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' controls={true} />
            {playID}
        </div>
    )
}