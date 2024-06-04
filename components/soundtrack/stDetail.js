'use client'

import Image from "next/image";
import scss from "./stDetail.module.scss";
import { useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import { bgmPlayerID } from "../atom.js"
import data from './data.json';
import EmptyCover from "./emptyCover.js";

export default function StDetail(props) {
    const playID = useAtomValue(bgmPlayerID)
    const stDetail = useRef();
    const detailInner = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(!stDetail.current) return false;

            let dTop = stDetail.current.getBoundingClientRect().y;
        
            if(dTop <= 0) {
                detailInner.current.style.transform = "translateY("+Math.abs(dTop)+"px)"
            } else {
                detailInner.current.style.transform = "translateY(0px)"
            }
        })
    },[])

    return (
        <div className={scss.st_detail} style={{"background":playID > 0 && data[playID-1].albumInfo["bgColor"] ? data[playID-1].albumInfo["bgColor"] : ""}} ref={stDetail}>
            <div className={scss.detail_inner} ref={detailInner}>
                <div className={scss.cover}>
                    {playID > 0 && props.coverImgSrc ?
                        <Image src={props.coverImgSrc} alt={data[playID-1].albumInfo["name"] ? data[playID-1].albumInfo["name"] : ""} width={500} height={500} className={scss.ac_thumbnail} /> : <EmptyCover className={scss.empty} />
                    }
                </div>
                <div  className={scss.info}>
                    {playID > 0 ? 
                        <ul style={{"color":playID > 0 && data[playID-1].albumInfo["txtColor"] ? data[playID-1].albumInfo["txtColor"] : ""}}>
                            {data[playID-1].title ? <li><span className={scss.category}>제목:</span><span className={scss.value}>{data[playID-1].title}</span></li> : ""}
                            {data[playID-1].artist ? <li><span className={scss.category}>아티스트:</span><span className={scss.value}>{data[playID-1].artist}</span></li> : ""}
                            {data[playID-1].albumName ? <li><span className={scss.category}>앨범명:</span><span className={scss.value}>{data[playID-1].albumInfo["name"]}</span></li> : ""}
                            {data[playID-1].time ? <li><span className={scss.category}>재생시간:</span><span className={scss.value}>{data[playID-1].time}</span></li> : ""}
                        </ul>
                        : 
                        <p className={scss.not_connect}>노래를 선택해주세요.</p>
                    }
                </div>
            </div>
        </div>
    )
}