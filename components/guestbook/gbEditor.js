'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import moment from 'moment';
import scss from "./gbEditor.module.scss";
import { useId, useState, useEffect, useRef } from 'react';
import { useRecoilState } from "recoil";
import { gbItemID , gbItemMode } from "../atom.js"

export default function GbWrite(props) {
    const router = useRouter();
    const Labeling = useId();
    const mode = props.mode;
    const gb = props.data;
    const pwField = useRef();

    const [gbName,setGbName] = useState();
    const [gbPassword,setGbPassword] = useState();
    const [orgPassword,checkOrgPassword] = useState();
    const [gbEmail,setGbEmail] = useState();
    const [gbContent,setGbContent] = useState();
    
    const [ gbId, setGbId ] = useRecoilState(gbItemID)
    const [ gbMode, setGbMode ] = useRecoilState(gbItemMode)

    useEffect(() => {
        if(gb) {
            setGbName(gb.name)
            setGbPassword(null);
            setGbEmail(gb.email)
            setGbContent(gb.content)

            if(mode == "PATCH") {
                checkOrgPassword(gb.password)
            }
        }
    },[])

    return(
        <form className={scss.gb_editor} onSubmit={(e) => {
            e.preventDefault();

            const gbEditform = e.target;

            let data = {
                name: gbEditform.name.value,
                email: gbEditform.email.value,
                password: gbEditform.password.value,
                dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                content: gbEditform.content.value
            }

            if(mode == "PATCH") {
                if(orgPassword != gbPassword) {
                    alert("비밀번호가 틀렸어요")
                    setGbPassword("")
                    pwField.current.focus();
                    return false;
                }
            }

            const options = {
                method: mode,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:9999/guestbook/${mode == "PATCH" ? gb.id : ""}`,options).then(resp=>resp.json()).then(result=> {
                setGbPassword(null); //비밀번호는 무조건 빈값으로 리셋
                if(mode == "POST") {
                    setGbName(null);
                    setGbEmail(null);
                    setGbContent(null);
                } else if(mode == "PATCH") {
                    setGbId(gb.id)
                    setGbMode("GET")
                }
                router.refresh();
            });
        }}>
            <fieldset>
                <legend>방명록 작성폼</legend>
                <dl>
                    <div className={`${scss.field} ${scss.name}`}>
                        <dt><label htmlFor={`${Labeling}name`}>이름</label></dt>
                        <dd><input type="text" name="name" id={`${Labeling}name`} value={gbName ? gbName : ""} onChange={(e) => setGbName(e.target.value)} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.password}`}>
                        <dt><label htmlFor={`${Labeling}password`}>비밀번호</label></dt>
                        <dd><input type="password" name="password" id={`${Labeling}password`} ref={pwField} value={gbPassword ? gbPassword : ""} onChange={(e) => setGbPassword(e.target.value)} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.email}`}>
                        <dt><label htmlFor={`${Labeling}email`}>이메일</label></dt>
                        <dd><input type="email" name="email" id={`${Labeling}email`} value={gbEmail ? gbEmail : ""} onChange={(e) => setGbEmail(e.target.value)} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.content}`}>
                        <dt><label htmlFor={`${Labeling}content`}>내용</label></dt>
                        <dd><textarea cols="30" rows="10" name="content" placeholder="내용을 입력해주세요." id={`${Labeling}content`} value={gbContent ? gbContent : ""} onChange={(e) => setGbContent(e.target.value)} required></textarea></dd>
                    </div>
                </dl>
                <div className={scss.btn_submit}>
                    {props.mode == "PATCH" ? <button type="button" onClick={() => `${setGbId(gb.id)} ${setGbMode("GET")}`}>돌아가기</button> : ""}
                    <button type="submit">{props.mode == "PATCH" ? "수정하기" : "등록하기"}</button>
                </div>
            </fieldset>
        </form>
    )
}