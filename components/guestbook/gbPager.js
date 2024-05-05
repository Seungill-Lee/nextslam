"use client"

import { useRouter } from "next/navigation";
import GbIcon from "/components/guestbook/gbIconSet.js";
import scss from "./gbDeletor.module.scss";
import { useState, useEffect } from "react";

export default function GbDeletor(props) {
    const router = useRouter();
    const [pageNum, setPageNum] = useState(count);

    useEffect(() => {
        setPageNum(1)
    },[])

    return(
        <div className={scss.gb_pager}>
            <button type="button"><GbIcon shape="Prev" onClick={() => `${pageNum > 1 ? setPageNum(count - 1) : setPageNum(1)} ${router.push("/guestbook?page_num="+pageNum)}`} /></button>
            <button type="button"><GbIcon shape="Next" /></button>
        </div>
    )
}