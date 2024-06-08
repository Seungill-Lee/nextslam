'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import scss from "./bgmPlayer.module.scss";
import { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player/lazy';
import { useAtom } from "jotai";
import { bgmPlayerID, bgmPlaying } from "../atom.js"
import data from './data.json';
import TimeConverter from "./timeConverter.js"
import BpIcon from "./bpIconSet.js"
import EmptyCover from "./emptyCover.js"

export default function BgmPlayer() {
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    //SSR로딩 끝나고 CSR로딩 시작 타이밍 체크(App Router 이슈, 사운드트랙 접근 전 Preload방지)
    useEffect(() => {
        if(pathname == "/soundtrack") {
            setIsClient(true)
        }
    }, [pathname])

    const [playing,setPlaying] = useAtom(bgmPlaying); //Play, Pause, Error, Ready, Stop
    const [playID,setPlayID] = useAtom(bgmPlayerID);
    const bgmLen = data.length;
    const videoRef = useRef(null);
    const [currentTime,updateCurrentTime] = useState(0);
    const [targetRepeat,stateTargetRepeat] = useState(false);

    //console.log(isClient)

    return (
        <div id={scss.bgm_player} className={playID > 0 ? scss["active"] : ""}>
            {isClient == true ?
                <>
                    <ReactPlayer url={playID > 0 ? data[playID-1].playerUrl : ""} ref={videoRef} onReady={() => setPlaying("Play")} onProgress={({played}) => updateCurrentTime(played)} controls={true} playing={playing == "Play" ? true : false} loop={targetRepeat ? true : false} onEnded={() => `${playID == bgmLen ? setPlayID(1) : setPlayID(playID+1)} ${setPlaying("Ready")}`} onError={() => `${setPlaying("Error")} ${playID == bgmLen ? setPlayID(1) : setPlayID(playID+1)} ${setPlaying("Ready")}`} style={{"position":"absolute","top":"-9999px","left":"-9999px"}} />
                    <div className={scss.progress_bar}>
                        <input type="range" value={playID > 0 && playing != "Error" ? currentTime*1000 : 0} min={0} max={999} onChange={e => {updateCurrentTime(parseFloat(e.target.value/1000)); videoRef.current.seekTo(parseFloat(e.target.value/1000));}} />
                        <progress value={playID > 0 && playing != "Error" ? currentTime*1000 : 0} max={999}></progress>
                    </div>
                    <div className={scss.main_controls}>
                        <span className={scss.btn_ctrl_set}>
                            <button type="button" className={scss.btn_prev} onClick={() => {`${playID == 1 ? setPlayID(bgmLen) : setPlayID(playID-1)} ${setPlaying("Ready")}`}} disabled={playID == 0 ? true : false}><BpIcon shape="Prev" /></button>
                            <button type="button" className={scss.btn_player} onClick={() => playing == "Play" ? setPlaying("Pause") : setPlaying("Play")} disabled={playID == 0 || playing == "Ready" || playing == "Error" ? true : false}>
                                <BpIcon shape={`${
                                    {
                                        Play: "Pause",
                                        Pause: "Play",
                                        Stop: "Play",
                                        Ready: "Pause",
                                        Error: "Play"
                                    }[playing]
                                }`} />
                            </button>
                            <button type="button" className={scss.btn_next} onClick={() => {`${playID == bgmLen ? setPlayID(1) : setPlayID(playID+1)} ${setPlaying("Ready")}`}} disabled={playID == 0 ? true : false}><BpIcon shape="Next" /></button>
                        </span>
                        <span className={scss.play_time}>
                            {playID > 0 && playing != "Error" ? <TimeConverter millisecond={videoRef.current.getCurrentTime()} /> : "0:00"} / {playID > 0 && playing != "Error" ? <TimeConverter millisecond={videoRef.current.getDuration()} /> : "0:00"}
                        </span>
                    </div>
                    <div className={scss.playing_info}>
                        <div className={scss.album_cover}>
                            {playID > 0 && data[playID-1].coverImgSrc ? 
                                <Image src={data[playID-1].coverImgSrc} alt={data[playID-1].albumInfo["name"] ? data[playID-1].albumInfo["name"] : ""} width={200} height={200} /> : <EmptyCover className={scss.empty} />
                            }
                        </div>
                        {playing == "Error" ?
                            <ul>
                                <li className={scss.title}>재생에 실패하였습니다.</li>
                                <li className={scss.artist}>연결 오류</li>
                            </ul>
                             : 
                            <ul>
                                <li className={scss.title}>{playID > 0 ? data[playID-1].title : "노래를 선택해주세요."}</li>
                                <li className={scss.artist}>{playID > 0 ? data[playID-1].artist : "노래를 선택해주세요."}</li>
                            </ul>
                        }
                    </div>
                    <div className={scss.sub_controls}>
                        <span className={scss.btn_ctrl_set}>
                            <button type="button" className={`${scss.btn_repeat} ${targetRepeat ? scss.only1 : ""}`} onClick={() => !targetRepeat ? stateTargetRepeat(true) : stateTargetRepeat(false)}><BpIcon shape="Repeat" alt={!targetRepeat ? "Target Repeat" : "All Repeat"} /></button>
                            <button type="button" className={scss.btn_playlist} onClick={() => {router.replace("/soundtrack")}} disabled={pathname == "/soundtrack" ? true : false}><BpIcon shape="Playlist" /></button>
                            <button type="button" className={scss.btn_close} onClick={() => {setPlaying("Stop"); updateCurrentTime(0); setPlayID(0); stateTargetRepeat(false)}}><BpIcon shape="Close" /></button>
                        </span>
                    </div>
                </> : null
            }
        </div>
    )
}