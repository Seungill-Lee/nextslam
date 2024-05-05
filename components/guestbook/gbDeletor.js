'use client'

import { useRouter } from "next/navigation";
import scss from "./gbDeletor.module.scss";
import { useState, useEffect } from 'react';
import { useRecoilState } from "recoil";
import { gbItemID , gbItemMode } from "../atom.js"

export default function GbDeletor(props) {
    const router = useRouter();
    const gb = props.data;
    const [gbId, setGbId] = useRecoilState(gbItemID)
    const [gbMode, setGbMode] = useRecoilState(gbItemMode)
    const [gbPassword,setGbPassword] = useState();
    const [orgPassword,checkOrgPassword] = useState();

    useEffect(() => {
        checkOrgPassword(gb.password)
    },[])

    return(
        <form className={scss.gb_deletor} onSubmit={e => {
            e.preventDefault();

            const gbDeleteform = e.target;

            if(orgPassword != gbPassword) {
                alert("비밀번호가 틀렸어요")
                setGbPassword("");
                gbDeleteform.password.focus();
                return false;
            }

            const options = {
                method: "DELETE"
            }
            console.log(gb.id)
            
            fetch(`http://localhost:9999/guestbook/${gb.id}`,options).then(resp => resp.json()).then(result => {
                router.refresh();
            })
        }}>
            <p className={scss.msg}>정말 삭제하시겠습니까??</p>
            <div className={scss.field}>
                <input type="password" name="password" placeholder="비빌번호 확인" title="해당 게시물의 비밀번호를 입력해주세요." value={gbPassword || ""} onChange={(e) => setGbPassword(e.target.value)} />
            </div>
            <div className={scss.btn_delete}>
                <button type="button" onClick={() => `${setGbId(gb.id)} ${setGbMode("GET")}`}>돌아가기</button>
                <button type="submit">삭제하기</button>
            </div>
        </form>
    )
}