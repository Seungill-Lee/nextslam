'use client'

import scss from "./gbDeletor.module.scss";
import { useState, useEffect } from 'react';
import { handleSubmit } from "./gbAction.js"
import { decipher } from '../crypto.js'

export default function GbDeletor(props) {
    const gb = props.data;
    const targetId = props.targetId;
    const changeMode = props.changeMode;

    const [gbId,setGbId] = useState();
    const [gbPassword,setGbPassword] = useState();
    const [orgPassword,checkOrgPassword] = useState();
    const gbSubmit = handleSubmit.bind(null,"DELETE",gbId);

    useEffect(() => {
        if(gb) {
            setGbId(gb._id);
            checkOrgPassword(gb.password)
        }
    },[])

    return(
        <form className={scss.gb_deletor} onSubmit={e => {
            const gbDeleteform = e.target;

            if(decipher(orgPassword) != gbPassword) {
                alert("비밀번호가 틀렸어요")
                setGbPassword("");
                gbDeleteform.password.focus();
                return false;
            }
        }} action={gbSubmit}>
            <p className={scss.msg}>정말 삭제하시겠습니까??</p>
            <div className={scss.field}>
                <input type="password" name="password" placeholder="비빌번호 확인" title="해당 게시물의 비밀번호를 입력해주세요." value={gbPassword || ""} onChange={(e) => setGbPassword(e.target.value)} />
            </div>
            <div className={scss.btn_delete}>
                <button type="button" onClick={() => `${targetId(gb._id)} ${changeMode("GET")}`}>돌아가기</button>
                <button type="submit">삭제하기</button>
            </div>
        </form>
    )
}