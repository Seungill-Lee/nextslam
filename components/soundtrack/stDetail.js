'use client'

import Link from 'next/link';
import Image from "next/image";
import { useRecoilState } from "recoil";
import { bgmPlayerID,bgmPlaying } from "../atom.js"
import scss from "./stDetail.module.scss";
import data from './data.json';
import EmptyCover from "./emptyCover.js";

export default function StDetail(props) {
    const [playID,setPlayID] = useRecoilState(bgmPlayerID)
    const [playing,setPlaying] = useRecoilState(bgmPlaying)

    return (
        <div className={`${scss.st_detail} ${playID > 0 ? scss.active : ""}`} style={{"background":playID > 0 && data[playID-1].albumBgInfo ? data[playID-1].albumBgInfo : "#222222"}}>
            <div className={scss.cover}>
                {playID > 0 && data[playID-1].coverImgSrc ?
                    <Image src={data[playID-1].coverImgSrc} alt={data[playID-1].albumName ? data[playID-1].albumName : ""} width={500} height={500} className={scss.ac_thumbnail} /> : <EmptyCover className={scss.empty} />
                }
            </div>
            {playID > 0 ? 
            <ul className={scss.info} style={{"color":playID > 0 && data[playID-1].albumTxtColor ? data[playID-1].albumTxtColor : "#222222"}}>
                {data[playID-1].title ? <li><span className={scss.category}>제목:</span><span className={scss.value}>{data[playID-1].title}</span></li> : ""}
                {data[playID-1].artist ? <li><span className={scss.category}>아티스트:</span><span className={scss.value}>{data[playID-1].artist}</span></li> : ""}
                {data[playID-1].albumName ? <li><span className={scss.category}>앨범명:</span><span className={scss.value}>{data[playID-1].albumName}</span></li> : ""}
                {data[playID-1].time ? <li><span className={scss.category}>재생시간:</span><span className={scss.value}>{data[playID-1].time}</span></li> : ""}
            </ul> : ""}
        </div>
    )
}