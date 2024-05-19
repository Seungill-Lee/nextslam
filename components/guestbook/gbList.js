'use client'

import { useRouter, useSearchParams } from "next/navigation";
import scss from "./gbList.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbViewer from "/components/guestbook/gbViewer.js";
import GbDeletor from "/components/guestbook/gbDeletor.js";
import GbPager from "/components/guestbook/gbPager.js";
import { useState, useEffect } from 'react';
import { useRecoilValue } from "recoil";
import { gbItemID , gbItemMode } from "../atom.js"

export default function GbList(props) {
    const [gbData, setGbData] = useState();
    const gbId = useRecoilValue(gbItemID);
    const gbMode = useRecoilValue(gbItemMode);
    const gbLen = props.data.length;
    const limitLen = 5;
    const searchParams = useSearchParams();
    const pageNum = searchParams.get("page_num");

    useEffect(() => {
        setGbData(props.data)
    },[props.data])

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
                                        "GET": <GbViewer data={gb} />,
                                        "PATCH" : <GbEditor mode="PATCH" data={gb} />,
                                        "DELETE" : <GbDeletor data={gb} />,
                                    }[gbMode]
                                : <GbViewer data={gb} />
                            }
                        </li> : ""
                    );
                }) : null}
            </ul>
            <GbPager dataLength={gbLen ? gbLen : 0} viewLen={limitLen} pageNum={pageNum || 1} />
        </>
    )
}