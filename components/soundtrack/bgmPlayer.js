'use client'

import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube';
import { useRecoilState } from "recoil";
import { bgmPlayerID } from "/components/atom.js"
import scss from "/components/soundtrack/bgmPlayer.module.scss";
import data from '/components/soundtrack/data.json';

export default function BgmPlayer() {
    const [playID,setTrackNum] = useRecoilState(bgmPlayerID)
    const [isClient, setIsClient] = useState(false)
    const bgmLen = data.length;

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div id={scss.playlist}>
            {isClient == true ?
                <>
                    <ReactPlayer url={playID > 0 ? data[playID-1].url : ''} controls={true} playing={true} onEnded={() => bgmLen == playID ? setTrackNum(1) : setTrackNum(playID+1)} />
                    제목: {playID > 0 ? data[playID-1].title : '노래를 선택해주세요.'}
                </> : ''
            }
        </div>
    )
}