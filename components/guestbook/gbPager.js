"use client"

import { useRouter } from "next/navigation";
import GbIcon from "/components/guestbook/gbIconSet.js";
import scss from "./gbPager.module.scss";
import { useState, useEffect } from "react";

export default function GbPager(props) {
    const router = useRouter();
    const pageNum = Number(props.pageNum);
    const [totalPageNum, setTotalPageNum] = useState();
    const viewLen = Number(props.viewLen);

    useEffect(() => {
        setTotalPageNum(Math.ceil(props.dataLength/viewLen))
    },[viewLen])

    return(
        <div className={scss.gb_pager}>
            <button type="button" onClick={() => {
                pageNum > 1 ? `${router.push("/guestbook?page_num="+(pageNum-1))}` : `${router.push("/guestbook?page_num="+(1))}`
            }} disabled={pageNum == 1 ? true : false}>
                <GbIcon shape="Prev" />
            </button>
            <div className={scss.page_num}><strong className={scss.current}>{pageNum}</strong> / <span className={scss.total}>{totalPageNum}</span></div>
            <button type="button" onClick={() => {
                pageNum < totalPageNum ? `${router.push("/guestbook?page_num="+(pageNum+1))}` : `${router.push("/guestbook?page_num="+totalPageNum)}`
            }} disabled={pageNum == totalPageNum ? true : false}>
                <GbIcon shape="Next" />
            </button>
        </div>
    )
}