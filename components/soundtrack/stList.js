'use client'

import Link from 'next/link';
import Image from "next/image";
import { useRecoilState } from "recoil";
import { bgmPlayerID,bgmPlaying } from "../atom.js"
import scss from "./stList.module.scss";
import data from './data.json';

export default function STItem(props) {
    const [playID,setPlayID] = useRecoilState(bgmPlayerID)
    const [playing,setPlaying] = useRecoilState(bgmPlaying)

    return (
        <ul className={scss.st_list}>
            {
                data.map((a,i) => {
                    return (
                        <li className={playID == a.id ? scss["active"] : ""} key={i}>
                            <a href="/" onClick={(e) => {setPlayID(a.id); {!playing ? setTimeout(() => setPlaying(true),300) : null}; e.preventDefault()}}>
                                <div className={scss.album_cover}>
                                    <Image src={a.coverUrl ? a.coverUrl : ""} alt={a.albumName ? a.albumName : ""} width={100} height={100} />
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