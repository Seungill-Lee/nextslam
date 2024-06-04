'use client'

import Link from 'next/link';
import Image from "next/image";
import { useAtom } from "jotai";
import { bgmPlayerID, bgmPlaying } from "../atom.js"
import scss from "./stList.module.scss";
import data from './data.json';
import EmptyCover from "./emptyCover.js";
import SoundWaveIcon from "./soundWaveIcon.js";
import LoadingIcon from "./loadingIcon.js";
import PlayErrorIcon from "./playErrorIcon.js";
import StDetail from "./stDetail.js";

export default function STItem() {
    const [playID,setPlayID] = useAtom(bgmPlayerID);
    const [playing,setPlaying] = useAtom(bgmPlaying); //Play, Pause, Error, Ready, Stop

    //console.log(playing)

    return (
        <div className={`${scss.soundtrack} ${playID > 0 ? scss.view_detail : ""}`}>
            <ul className={scss.st_list}>
                {
                    data.map((a,i) => {
                        return (
                            <li key={i}>
                                <a href="/" onClick={(e) => {setPlayID(a.id); {playing != "Ready" ? setPlaying("Ready") : null};  e.preventDefault()}} className={playID == a.id ? scss["active"] : ""}>
                                    <div className={scss.album_cover}>
                                        {a.coverImgSrc ?
                                            <Image src={a.coverImgSrc} alt={a.albumInfo["name"] ? a.albumInfo["name"] : ""} width={100} height={100} className={scss.ac_thumbnail} /> : <EmptyCover className={scss.empty} />
                                        }
                                        {playID == a.id ? 
                                            {
                                                Play: <SoundWaveIcon className={scss.ico_sound_wave} playIs={true} />,
                                                // Play: <LoadingIcon className={scss.ico_loading} />,
                                                Pause: <SoundWaveIcon className={scss.ico_sound_wave} playIs={false} />,
                                                Stop: "",
                                                Start: <LoadingIcon className={scss.ico_loading} />,
                                                Ready: <LoadingIcon className={scss.ico_loading} />,
                                                Error : <PlayErrorIcon className={scss.ico_error} />
                                            }[playing]
                                         : ""}
                                    </div>
                                    <ul className={scss.album_info}>
                                        <li className={scss.title}>{a.title}</li>
                                        <li className={scss.artist}>{a.artist}</li>
                                        <li className={scss.album_name}>{a.albumInfo["name"]}</li>
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