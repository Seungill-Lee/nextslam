'use client'

import { useRouter, useSearchParams } from "next/navigation";
import scss from "./gbList.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbViewer from "/components/guestbook/gbViewer.js";
import GbDeletor from "/components/guestbook/gbDeletor.js";
import GbPager from "/components/guestbook/gbPager.js";
import { useState, useEffect } from 'react';

export default function GbList(props) {
    const [gbData, setGbData] = useState();
    const [gbId,setGbId] = useState();
    const [gbMode,setGbMode] = useState("GET");
    const limitLen = 5;
    const searchParams = useSearchParams();
    const pageNum = searchParams.get("page_num");

    useEffect(() => {
        setGbData(props.data)
    },[props.data])

    const targetId = (id) => {
        setGbId(id)
    }
    const changeMode = (mode) => {
        setGbMode(mode)
    }

    //console.log(limitLen*searchParams.get("page_num"))

    return(
        <>
            <ul className={scss.gb_list}>
                {gbData ? gbData.map((gb, i) => {
                    return (
                        i >= `${limitLen*(pageNum-1) || 0}` && i < `${limitLen*pageNum || limitLen}` ?
                        <li key={i+1}>
                            { 
                                gbId == gb._id ?
                                    {
                                        "GET": <GbViewer data={gb} targetId={targetId} changeMode={changeMode} />,
                                        "PATCH" : <GbEditor mode="PATCH" data={gb} targetId={targetId} changeMode={changeMode} />,
                                        "DELETE" : <GbDeletor data={gb} targetId={targetId} changeMode={changeMode} />,
                                    }[gbMode]
                                : <GbViewer data={gb} targetId={targetId} changeMode={changeMode} />
                            }
                        </li> : ""
                    );
                }) : null}
            </ul>
            <GbPager data={gbData ? gbData : ""} viewLen={limitLen} pageNum={pageNum || 1} />
        </>
    )
}