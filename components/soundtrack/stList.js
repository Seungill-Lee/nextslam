'use client'

import Link from 'next/link';
import Image from "next/image";
import { useRecoilState } from "recoil";
import { bgmPlayerID, bgmPlaying, bgmPlayError } from "../atom.js"
import scss from "./stList.module.scss";
import data from './data.json';
import EmptyCover from "./emptyCover.js";
import SoundWaveIcon from "./soundWaveIcon.js";
import PlayErrorIcon from "./playErrorIcon.js";
import StDetail from "./stDetail.js";

export default function STItem() {
    const [playID,setPlayID] = useRecoilState(bgmPlayerID);
    const [playing,setPlaying] = useRecoilState(bgmPlaying);
    const [playError,statePlayError] = useRecoilState(bgmPlayError);

    return (
        <div className={`${scss.soundtrack} ${playID > 0 ? scss.view_detail : ""}`}>
            <ul className={scss.st_list}>
                {
                    data.map((a,i) => {
                        return (
                            <li key={i}>
                                <a href="/" onClick={(e) => {setPlayID(a.id); {!playing ? setTimeout(() => setPlaying(true),300) : null}; e.preventDefault()}} className={playID == a.id ? scss["active"] : ""}>
                                    <div className={scss.album_cover}>
                                        {a.coverImgSrc ?
                                            <Image src={a.coverImgSrc} alt={a.albumName ? a.albumName : ""} width={100} height={100} className={scss.ac_thumbnail} /> : <EmptyCover className={scss.empty} />
                                        }
                                        {playID == a.id ? 
                                            (playError ? 
                                                <PlayErrorIcon className={scss.ico_error} /> : <SoundWaveIcon className={scss.sound_wave} playIs={playing ? true : false} />
                                            )
                                         : ""}
                                    </div>
                                    <ul className={scss.album_info}>
                                        <li className={scss.title}>{a.title}</li>
                                        <li className={scss.artist}>{a.artist}</li>
                                        <li className={scss.album_name}>{a.albumName}</li>
                                        <li className={scss.time}>{a.time}</li>
                                    </ul>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <StDetail />
        </div>
    )
}