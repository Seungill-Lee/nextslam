'use client'

import { Fragment } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GbIcon from "/components/guestbook/gbIconSet.js";
import GravatarN from "/components/guestbook/gravatar.js";
import scss from "./gbViewer.module.scss";

export default function GbViewer(props) {
    const gb = props.data

    return(
        <div className={scss.gb_viewer} key={gb.id}>
            <div className={scss.profile}>
                <div className={scss.photo}>
                    <GravatarN email={gb.email} />
                </div>
                <div className={scss.info}>
                    <div className={scss.name}>{gb.name}</div>
                    <div className={scss.date_time}>{gb.dateTime}</div>
                </div>
            </div>
            <div className={scss.content}>
                {`${gb.content}`.split("\n").map((line,i) => {
                    return <Fragment key={i+1}>{line}<br /></Fragment>;
                })}
            </div>
            <div className={scss.btn_set}>
                <button type="button" className={scss.btn_edit}><GbIcon shape="Edit" /><span className={scss.txt}>수정</span></button>
                <button type="button" className={scss.btn_delete}><GbIcon shape="Delete" /><span className={scss.txt}>삭제</span></button>
            </div>
        </div>
    )
}