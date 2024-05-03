"use client"

import { useRouter, useSearchParams } from "next/navigation";
import GbIcon from "/components/guestbook/gbIconSet.js";
import scss from "./gbListBtnSet.module.scss";

export default function GbListBtnSet(props) {
    const router = useRouter();

    return (
        <div className={scss.gb_btn_set}>
            <button type="button" className={scss.btn_edit} onClick={() => {router.push(`/guestbook?edit_id=${props.post_id}`)}}><GbIcon shape="Edit" /><span className={scss.txt}>수정</span></button>
            <button type="button" className={scss.btn_delete}><GbIcon shape="Delete" /><span className={scss.txt}>삭제</span></button>
        </div>
    );
}
