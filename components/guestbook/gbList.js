'use client'

import { useRouter, useSearchParams } from "next/navigation";
import scss from "./gbList.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbViewer from "/components/guestbook/gbViewer.js";
import GbDeletor from "/components/guestbook/gbDeletor.js";
import { useState, useEffect } from 'react';
import { useRecoilValue } from "recoil";
import { gbItemID , gbItemMode } from "../atom.js"

export default function GbList(props) {
    const [gbData, setGbData] = useState();
    const gbId = useRecoilValue(gbItemID)
    const gbMode = useRecoilValue(gbItemMode)

    useEffect(() => {
        setGbData(props.data)
    },[])

    return(
        <ul className={scss.gb_list}>
            {gbData ? gbData.map((gb, i) => {
                return (
                    <li key={gb.id}>
                        { 
                            gbId == gb.id ?
                                {
                                    "GET": <GbViewer data={gb} />,
                                    "PATCH" : <GbEditor mode="PATCH" data={gb} />,
                                    "DELETE" : <GbDeletor data={gb} />,
                                }[gbMode]
                            : <GbViewer data={gb} />
                        }
                    </li>
                );
            }) : null}
        </ul>
    )
}