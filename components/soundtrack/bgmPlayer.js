'use client'

import { usePathname,useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player/lazy';
import { useRecoilState } from "recoil";
import { bgmPlayerID,bgmPlaying } from "../atom.js"
import scss from "/components/soundtrack/bgmPlayer.module.scss";
import data from '/components/soundtrack/data.json';

export default function BgmPlayer() {
    const [playing,setPlaying] = useRecoilState(bgmPlaying)
    const [playID,setPlayID] = useRecoilState(bgmPlayerID)
    const [isClient, setIsClient] = useState(false)
    const bgmLen = data.length;
    const videoRef = useRef(null);
    const [currentTime,updateCurrentTime] = useState(0);
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div id={scss.bgm_player} className={playID > 0 ? scss["active"] : ""}>
            {isClient == true ?
                <>
                    <ReactPlayer url={playID > 0 ? data[playID-1].url : ''} ref={videoRef} onProgress={() => updateCurrentTime((videoRef.current.getCurrentTime()/videoRef.current.getDuration())*100)} controls={true} playing={playing} onEnded={() => playID == bgmLen ? setPlayID(1) : setPlayID(playID+1)} style={{position:"absolute",top:"-9999px",left:"-9999px"}} />
                    <div className={scss.playing_condition}>
                        <input type="range" value={playID > 0 ? currentTime : 0} min={0} max={99.999} onChange={e => {updateCurrentTime(e.target.value); videoRef.current.seekTo(e.target.value);}} />
                    </div>
                    <div className={scss.playing_condition}>
                        <progress value={playID > 0 ? currentTime : 0} max={99.999}></progress>
                    </div>
                    <div className={scss.main_controls}>
                        <div className={scss.btn_ctrl_set}>
                            <button type="button" onClick={() => playID == 1 ? setPlayID(bgmLen) : setPlayID(playID-1)} disabled={playID == 0 ? true : false}>Prev</button>
                            <button type="button" onClick={() => playing ? setPlaying(false) : setPlaying(true)} disabled={playID == 0 ? true : false}>{playing ? "Pause" : "Play"}</button>
                            <button type="button" onClick={() => playID == bgmLen ? setPlayID(1) : setPlayID(playID+1)} disabled={playID == 0 ? true : false}>Next</button>
                        </div>
                    </div>
                    <div className="playing_info">
                        <div className={scss.album_cover}>

                        </div>
                        <ul>
                            <li>제목: {playID > 0 ? data[playID-1].title : '노래를 선택해주세요.'}</li>
                            <li>아티스트: {playID > 0 ? data[playID-1].artist : ''}</li>
                        </ul>
                        
                    </div>
                    <div className={scss.sub_controls}>
                        <button type="button" onClick={() => {router.push("/soundtrack")}} disabled={pathname == "/soundtrack" ? true : false}>List</button>
                        <button type="button" onClick={() => {setPlaying(false); setPlayID(0)}}>Close</button>
                    </div>
                </> : ''
            }
        </div>
    )
}