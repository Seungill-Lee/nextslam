'use client'

import Link from 'next/link';
import Image from "next/image";
import { useRecoilState } from "recoil";
import { bgmPlayerID,bgmPlaying } from "../atom.js"
import scss from "./stList.module.scss";
import data from './data.json';
import EmptyCover from "./emptyCover.js";
import SoundWaveIcon from "./soundWaveIcon.js";

export default function STItem(props) {
    const [playID,setPlayID] = useRecoilState(bgmPlayerID)
    const [playing,setPlaying] = useRecoilState(bgmPlaying)

    return (
        <ul className={scss.st_list}>
            {
                data.map((a,i) => {
                    return (
                        <li key={i}>
                            <a href="/" onClick={(e) => {setPlayID(a.id); {!playing ? setTimeout(() => setPlaying(true),300) : null}; e.preventDefault()}} className={playID == a.id ? scss["active"] : ""}>
                                <div className={scss.album_cover}>
                                    {a.coverUrl ?
                                        <Image src={a.coverUrl} alt={a.albumName ? a.albumName : ""} width={100} height={100} className={scss.ac_thumbnail} /> : <EmptyCover className={scss.ico_empty} />
                                    }
                                    {playID == a.id && playing ? <SoundWaveIcon className={scss.sound_wave} /> : ""}
                                </div>
                                <div className={scss.title}>{a.title}</div>
                                <div className={scss.artist}>{a.artist}</div>
                                <div className={scss.album_name}>{a.albumName}</div>
                                <div className={scss.time}>{a.time}</div>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}