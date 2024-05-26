'use client'

import scss from "./gbEditor.module.scss";
import { useId, useState, useEffect, useRef } from 'react';
import { handleSubmit } from "./gbAction.js";
import { useFormState } from 'react-dom';

export default function GbWrite(props) {
    const Labeling = useId();
    const mode = props.mode;
    const gb = props.data;
    const targetId = props.targetId;
    const updateTargetId = props.updateTargetId;
    const changeMode = props.changeMode;
    let initialState = {
        success: null,
        message: '',
    }

    const [gbId,setGbId] = useState();
    const [gbName, setGbName] = useState();
    const [orgGbPassword, checkOrgGbPassword] = useState();
    const [gbPassword, setGbPassword] = useState();
    const [gbEmail, setGbEmail] = useState();
    const [gbContent, setGbContent] = useState();
    const gbSubmit = handleSubmit.bind(null,mode,gbId,orgGbPassword,gbPassword);
    const [state, formAction] = useFormState(gbSubmit,initialState,"/");
    const pwInput = useRef();

    useEffect(() => {
        if(gb) {
            //console.log(gb._id)
            setGbId(gb._id);
            setGbName(gb.name)
            setGbPassword(null);
            setGbEmail(gb.email)
            setGbContent(gb.content)
        }
    },[])

    useEffect(() => {
        if(mode == "PATCH") {
            checkOrgGbPassword(gb.password)
            if(state?.success == false) {
                alert("비밀번호가 틀렸습니다.");
                setGbPassword("");
                pwInput.current.focus();
            } else if(state?.success == true) {
                targetId(gbId)
                changeMode("GET")
            }
        }
    },[state])

    return(
        <form className={scss.gb_editor} onSubmit={(e) => {
            // const gbEditform = e.target;

            // if(mode == "PATCH") {
            //     console.log(state)
            //     if(state.success === false) {
            //         alert("비밀번호가 틀렸습니다.");
            //         setGbPassword("");
            //         gbEditform.password.focus();
            //     } else {
            //         console.log(gbId)
            //         targetId(gbId)
            //         changeMode("GET")
            //     }
            // } else {
            //     setGbName("")
            //     setGbPassword("");
            //     setGbEmail("")
            //     setGbContent("")
            //     router.push("/guestbook")
            // }
        }} action={formAction}>
            <fieldset>
                <legend>방명록 작성폼</legend>
                <dl>
                    <div className={`${scss.field} ${scss.name}`}>
                        <dt><label htmlFor={`${Labeling}name`}>이름</label></dt>
                        <dd><input type="text" name="name" id={`${Labeling}name`} value={gbName ? gbName : ""} onChange={(e) => setGbName(e.target.value)} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.password}`}>
                        <dt><label htmlFor={`${Labeling}password`}>비밀번호</label></dt>
                        <dd><input type="password" name="password" id={`${Labeling}password`} value={gbPassword ? gbPassword : ""} onChange={(e) => setGbPassword(e.target.value)} ref={pwInput} required /></dd>
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
                            <button type="button" onClick={() => `${targetId("")} ${changeMode("GET")}`}>돌아가기</button>
                            <button type="submit">수정하기</button>
                        </>
                        :
                        <button type="submit">등록하기</button>
                    }
                </div>
            </fieldset>
            <div>{state?.message}</div>
        </form>
    )
}