'use client'

import { useRouter, useSearchParams } from "next/navigation";
import scss from "./gbList.module.scss";
import GbEditor from "./gbEditor.js";
import GbViewer from "./gbViewer.js";
import GbDeletor from "./gbDeletor.js";
import GbReplyViewer from "./reply/gbReplyViewer.js";
import GbReplyEditor from "./reply/gbReplyEditor.js";
import GbReplyDeletor from "./reply/gbReplyDeletor.js";
import GbPager from "./gbPager.js";
import { useState, useEffect } from 'react';

export default function GbList(props) {
    const [gbData, setGbData] = useState();
    const [gbId,setGbId] = useState();
    const [gbMode,setGbMode] = useState("GET");
    const [updatedId,getUpdatedId] = useState();
    const [gbReplyMode,setGbReplyMode] = useState("GET");
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
    const updateTargetId = (id) => {
        getUpdatedId(id)
    }
    const changeReplyMode = (mode) => {
        setGbReplyMode(mode)
    }

    //console.log(limitLen*searchParams.get("page_num"))

    return(
        <>
            <ul className={scss.gb_list}>
                {gbData ? gbData.map((gb, i) => {
                    return (
                        i >= `${limitLen*(pageNum-1) || 0}` && i < `${limitLen*pageNum || limitLen}` ?
                        <li key={i+1}>
                            {gbId == gb._id ?
                                {
                                    "GET": <GbViewer data={gb} targetId={targetId} changeMode={changeMode} initId={updatedId} auth={props.auth} changeReplyMode={changeReplyMode} replyMode={gbReplyMode} />,
                                    "PATCH" : <GbEditor mode="PATCH" data={gb} targetId={targetId} changeMode={changeMode} updateTargetId={updateTargetId} />,
                                    "DELETE" : <GbDeletor data={gb} targetId={targetId} changeMode={changeMode} />,
                                }[gbMode]
                                : <GbViewer data={gb} targetId={targetId} changeMode={changeMode} auth={props.auth} changeReplyMode={changeReplyMode} />
                            }
                            {props.auth && gbId == gb._id ? 
                                {
                                    "GET": gb.reply && gbMode != "DELETE" ? <GbReplyViewer data={gb} targetId={targetId} auth={props.auth} changeReplyMode={changeReplyMode} /> : "",
                                    "POST": <GbReplyEditor mode="POST" data={gb} targetId={targetId} changeReplyMode={changeReplyMode} />,
                                    "PATCH": gb.reply ? <GbReplyEditor data={gb} mode="PATCH" targetId={targetId} changeReplyMode={changeReplyMode} /> : "",
                                    "DELETE": gb.reply ? <GbReplyDeletor data={gb} targetId={targetId} changeReplyMode={changeReplyMode} /> : "",
                                }[gbReplyMode]
                                : gb.reply ? <GbReplyViewer data={gb} targetId={targetId} auth={props.auth} changeReplyMode={changeReplyMode} /> : ""
                            }
                        </li> : ""
                    );
                }) : null}
            </ul>
            <GbPager data={gbData ? gbData : ""} viewLen={limitLen} pageNum={pageNum || 1} />
        </>
    )
}