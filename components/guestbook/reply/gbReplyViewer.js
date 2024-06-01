import Image from "next/image";
import scss from "./gbReplyViewer.module.scss";
import GbIcon from "../gbIconSet.js";
import { useState, useEffect, useRef } from "react";

export default function GbReplyViewer(props){
    const gb = props.data;
    const targetId = props.targetId;
    const changeReplyMode = props.changeReplyMode;

    return(
        <div className={scss.gb_reply_viewer}>
            <div className={scss.profile}>
                <div className={scss.photo}>
                    <Image src="/images/guestbook/profile_admin.png" alt="관리자" width={120} height={120} />
                </div>
                {props.auth ? 
                    <div className={scss.btn_set}>
                        <button type="button" onClick={() => `${targetId(gb._id)} ${changeReplyMode("PATCH")}`}>
                            <GbIcon shape="Edit" />
                        </button>
                        <button type="button" onClick={() => `${targetId(gb._id)} ${changeReplyMode("DELETE")}`}>
                            <GbIcon shape="Delete" />
                        </button>
                    </div>
                : ""}
            </div>
            <div className={scss.info}>
                <div className={scss.date_time}>{gb.reply.dateTime}</div>
                <div className={`${scss.content}`}>
                    {gb.reply.content}
                </div>
            </div>
        </div>
    )
}