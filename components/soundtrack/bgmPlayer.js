'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import scss from "/components/soundtrack/bgmPlayer.module.scss";
import { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player/lazy';
import { useRecoilState } from "recoil";
import { bgmPlayerID,bgmPlaying } from "/components/atom.js"
import data from '/components/soundtrack/data.json';
import TimeConverter from "/components/timeConverter.js"
import BpIcon from "/components/soundtrack/bpIconSet.js"

export default function BgmPlayer() {
    const [isClient, setIsClient] = useState(false);

    //SSR로딩 끝나고 CSR로딩 시작 타이밍 체크(App Router 이슈)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const [playing,setPlaying] = useRecoilState(bgmPlaying);
    const [playID,setPlayID] = useRecoilState(bgmPlayerID);
    const bgmLen = data.length;
    const videoRef = useRef(null);
    const [currentTime,updateCurrentTime] = useState(0);
    const [targetRepeat,stateTargetRepeat] = useState(false)
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div id={scss.bgm_player} className={playID > 0 ? scss["active"] : ""}>
            {isClient == true ?
                <>
                    <ReactPlayer url={playID > 0 ? data[playID-1].playerUrl : ""} ref={videoRef} onProgress={({played}) => updateCurrentTime(played)} controls={false} playing={playing} loop={targetRepeat ? true : false} onEnded={() => playID == bgmLen ? setPlayID(1) : setPlayID(playID+1)} style={{"position":"absolute","top":"-9999px","left":"-9999px"}} />
                    <div className={scss.progress_bar}>
                        <input type="range" value={playID > 0 ? currentTime*1000 : 0} min={0} max={1000} onChange={e => {updateCurrentTime(parseFloat(e.target.value/1000)); videoRef.current.seekTo(parseFloat(e.target.value/1000));}} />
                        <progress value={playID > 0 ? currentTime*1000 : 0} max={999.5}></progress>
                    </div>
                    <div className={scss.main_controls}>
                        <span className={scss.btn_ctrl_set}>
                            <button type="button" className={scss.btn_prev} onClick={() => {`${playID == 1 ? setPlayID(bgmLen) : setPlayID(playID-1)} ${setTimeout(() => setPlaying(true),300)}`}} disabled={playID == 0 ? true : false}><BpIcon shape="Prev" /></button>
                            <button type="button" className={`${scss.btn_player} ${playing ? scss.pause : scss.play}`} onClick={() => playing ? setPlaying(false) : setPlaying(true)} disabled={playID == 0 ? true : false}><BpIcon shape={playing ? "Pause" : "Play"} /></button>
                            <button type="button" className={scss.btn_next} onClick={() => {`${playID == bgmLen ? setPlayID(1) : setPlayID(playID+1)} ${setTimeout(() => setPlaying(true),300)}`}} disabled={playID == 0 ? true : false}><BpIcon shape="Next" /></button>
                        </span>
                        <span className={scss.play_time}>
                            {playID > 0 ? <TimeConverter millisecond={videoRef.current.getCurrentTime()} /> : "00:00"} / {playID > 0 ? <TimeConverter millisecond={videoRef.current.getDuration()} /> : "00:00"}
                        </span>
                    </div>
                    <div className={scss.playing_info}>
                        <div className={scss.album_cover}>
                            {playID > 0 ? <Image src={data[playID-1].coverUrl ? data[playID-1].coverUrl : ""} alt={data[playID-1].albumName ? data[playID-1].albumName : ""} width={200} height={200} /> : ""}
                        </div>
                        <ul>
                            <li className={scss.title}>{playID > 0 ? data[playID-1].title : "노래를 선택해주세요."}</li>
                            <li className={scss.artist}>{playID > 0 ? data[playID-1].artist : ""}</li>
                        </ul>
                    </div>
                    <div className={scss.sub_controls}>
                        <span className={scss.btn_ctrl_set}>
                            <button type="button" className={`${scss.btn_repeat} ${targetRepeat ? scss.only1 : ""}`} onClick={() => !targetRepeat ? stateTargetRepeat(true) : stateTargetRepeat(false)}><BpIcon shape="Repeat" alt={!targetRepeat ? "Target Repeat" : "All Repeat"} /></button>
                            <button type="button" className={scss.btn_playlist} onClick={() => {router.replace("/soundtrack")}} disabled={pathname == "/soundtrack" ? true : false}><BpIcon shape="Playlist" /></button>
                            <button type="button" className={scss.btn_close} onClick={() => {setPlaying(false); setPlayID(0); updateCurrentTime(0)}}><BpIcon shape="Close" /></button>
                        </span>
                    </div>
                </> : ''
            }
        </div>
    )
}