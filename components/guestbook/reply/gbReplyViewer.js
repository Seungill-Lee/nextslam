import GravatarN from "../gravatar.js";
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
                    <GravatarN email="ever9415@nate.com" />
                </div>
                <div className={scss.info}>
                    <div className={scss.name}>관리자</div>
                    <div className={scss.date_time}>{gb.reply.dateTime}</div>
                </div>
            </div>
            <div className={`${scss.content}`}>
                {gb.reply.content}
            </div>
            {props.auth ? 
                <div className={scss.btn_set}>
                    <button type="button" onClick={() => `${targetId(gb._id)} ${changeReplyMode("PATCH")}`}>
                        <GbIcon shape="Edit" /><span className={scss.txt}>수정</span>
                    </button>
                    <button type="button" onClick={() => `${targetId(gb._id)} ${changeReplyMode("DELETE")}`}>
                        <GbIcon shape="Delete" /><span className={scss.txt}>삭제</span>
                    </button>
                </div>
             : ""}
        </div>
    )
}