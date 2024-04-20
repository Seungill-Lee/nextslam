'use client'

import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube';
import { useRecoilState } from "recoil";
import { bgmPlayerID,bgmPlaying } from "../atom.js"
import scss from "/components/soundtrack/bgmPlayer.module.scss";
import data from '/components/soundtrack/data.json';

export default function BgmPlayer() {
    const [playing,setPlaying] = useRecoilState(bgmPlaying)
    const [playID,setPlayID] = useRecoilState(bgmPlayerID)
    const [isClient, setIsClient] = useState(false)
    const bgmLen = data.length;

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div id={scss.bgm_player} className={playID > 0 ? scss["active"] : ""}>
            {isClient == true ?
                <>
                    <ReactPlayer url={playID > 0 ? data[playID-1].url : ''} controls={true} playing={playing} onEnded={() => bgmLen == playID ? setPlayID(1) : setPlayID(playID+1)} style={{position:"absolute",top:"-9999px",left:"-9999px"}} />
                    <div className="main_controls">
                        <button type="button" onClick={() => playing ? setPlaying(false) : setPlaying(true)} disabled={playID == 0 ? true : false}>{playing ? "Pause" : "Play"}</button>
                    </div>
                    <div className="playing_info">
                        <div className={scss.album_cover}>

                        </div>
                        <ul>
                            <li>제목: {playID > 0 ? data[playID-1].title : '노래를 선택해주세요.'}</li>
                            <li>아티스트: {playID > 0 ? data[playID-1].artist : ''}</li>
                        </ul>
                        
                    </div>
                    <div className="sub_controls">
                        <button type="button" onClick={() => {setPlaying(false); setPlayID(0)}}>Close</button>
                    </div>
                </> : ''
            }
        </div>
    )
}