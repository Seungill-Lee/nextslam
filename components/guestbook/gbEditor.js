'use client'

import scss from "./gbEditor.module.scss";
import { useId, useState, useEffect } from 'react';
import { useRecoilState } from "recoil";
import { gbItemID , gbItemMode } from "../atom.js"
import { GbEditorBtn } from "./gbBtnSet.js"
import { handleSubmit } from "./gbAction.js"
import { decipher } from '../crypto.js'

export default function GbWrite(props) {
    const Labeling = useId();
    const mode = props.mode;
    const gb = props.data;

    const [gbName, setGbName] = useState();
    const [gbPassword, setGbPassword] = useState();
    const [orgPassword, checkOrgPassword] = useState();
    const [gbEmail, setGbEmail] = useState();
    const [gbContent, setGbContent] = useState();
    
    const [gbId, setGbId] = useRecoilState(gbItemID)
    const [gbMode, setGbMode] = useRecoilState(gbItemMode)
    const gbSubmit = handleSubmit.bind(null,mode,gbId);

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
            const gbEditform = e.target;

            if(mode == "PATCH") {
                if(decipher(orgPassword) != gbPassword) {
                    alert("비밀번호가 틀렸어요")
                    setGbPassword("");
                    gbEditform.password.focus();
                    return false;
                } else {
                    setGbId(gb._id)
                    setGbMode("GET")
                }
            } else {
                setGbName("")
                setGbPassword("");
                setGbEmail("")
                setGbContent("")
            }
        }} action={gbSubmit}>
            <fieldset>
                <legend>방명록 작성폼</legend>
                <dl>
                    <div className={`${scss.field} ${scss.name}`}>
                        <dt><label htmlFor={`${Labeling}name`}>이름</label></dt>
                        <dd><input type="text" name="name" id={`${Labeling}name`} value={gbName ? gbName : ""} onChange={(e) => setGbName(e.target.value)} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.password}`}>
                        <dt><label htmlFor={`${Labeling}password`}>비밀번호</label></dt>
                        <dd><input type="password" name="password" id={`${Labeling}password`} value={gbPassword ? gbPassword : ""} onChange={(e) => setGbPassword(e.target.value)} required /></dd>
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
                    {props.mode == "PATCH" ? 
                        <>
                            <GbEditorBtn roles="Return" data={gb}>돌아가기</GbEditorBtn>
                            <GbEditorBtn roles="Submit" data={gb}>수정하기</GbEditorBtn>
                        </>
                        :
                        <GbEditorBtn roles="Submit">등록하기</GbEditorBtn>
                    }
                </div>
            </fieldset>
        </form>
    )
}