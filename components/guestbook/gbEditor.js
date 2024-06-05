'use client'

import scss from "./gbEditor.module.scss";
import { useRouter } from 'next/navigation';
import { useId, useState, useEffect, useRef } from 'react';
import { handleSubmit } from "./gbAction.js";
import { useFormState } from "react-dom";
import GbSubmitBtn from "./gbSubmitBtn.js";

export default function GbWrite(props) {
    const Labeling = useId();
    const mode = props.mode;
    const gb = props.data;
    const targetId = props.targetId;
    const updateTargetId = props.updateTargetId;
    const changeMode = props.changeMode;
    let initialState = {
        success: null,
        errorInput: '',
        message: '',
    }

    const [gbId,setGbId] = useState();
    const [gbName, setGbName] = useState();
    const [gbPassword, setGbPassword] = useState();
    const [gbEmail, setGbEmail] = useState();
    const [gbContent, setGbContent] = useState();
    const gbSubmit = handleSubmit.bind(null,mode,gbId,gbPassword);
    const [state, formAction] = useFormState(gbSubmit,initialState);
    const router = useRouter();

    //input Ref
    const nameInput = useRef();
    const pwInput = useRef();
    const emailInput = useRef();
    const contArea = useRef();

    useEffect(() => {
        if(gb && mode == "PATCH") {
            //console.log(gb._id)
            setGbId(gb._id);
            setGbName(gb.name);
            setGbPassword(null);
            setGbEmail(gb.email);
            setGbContent(gb.content);
        }
    },[])

    useEffect(() => {
        if(state?.success == false) {
            alert(state?.message);

            switch (state?.errorInput) {
                case "name":
                    setGbName("")
                    nameInput.current.focus();
                    break;
                case "password":
                    setGbPassword("")
                    pwInput.current.focus();
                    break;
                case "email":
                    setGbEmail("")
                    emailInput.current.focus();
                    break;
                case "content":
                    setGbContent("")
                    contArea.current.focus();
                    break;
                default: null
            }
        } else if(state?.success == true) {
            if(mode == "PATCH") {
                targetId(gbId)
                updateTargetId(gbId)
                changeMode("GET")
            }
        }
    },[state])

    return(
        <form className={scss.gb_editor} onSubmit={() => {
            if(mode == "POST" && state?.success == true) {
                setGbId("");
                setGbName("")
                setGbPassword("");
                setGbEmail("")
                setGbContent("")
                router.push("/guestbook");
            }
        }} action={formAction}>
            <fieldset>
                <legend>방명록 작성폼</legend>
                <dl>
                    <div className={`${scss.field} ${scss.name}`}>
                        <dt><label htmlFor={`${Labeling}name`}>이름</label></dt>
                        <dd><input type="text" minLength="2" maxLength="8" name="name" id={`${Labeling}name`} value={gbName ? gbName : ""} onChange={(e) => setGbName(e.target.value)} ref={nameInput} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.password}`}>
                        <dt><label htmlFor={`${Labeling}password`}>비밀번호</label></dt>
                        <dd><input type="password" name="password" id={`${Labeling}password`} value={gbPassword ? gbPassword : ""} onChange={(e) => setGbPassword(e.target.value)} title="영문+숫자+특수문자를 조합한 8~16자리" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$" ref={pwInput} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.email}`}>
                        <dt><label htmlFor={`${Labeling}email`}>이메일</label></dt>
                        <dd><input type="email" name="email" id={`${Labeling}email`} value={gbEmail ? gbEmail : ""} onChange={(e) => setGbEmail(e.target.value)} ref={emailInput} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.content}`}>
                        <dt><label htmlFor={`${Labeling}content`}>내용</label></dt>
                        <dd><textarea cols="30" rows="10" minLength="30" maxLength="1000" name="content" placeholder="내용을 입력해주세요." id={`${Labeling}content`} value={gbContent ? gbContent : ""} onChange={(e) => setGbContent(e.target.value)} ref={contArea} required></textarea></dd>
                    </div>
                </dl>
                <div className={scss.btn_submit}>
                    {props.mode == "PATCH" ? 
                        <>
                            <GbSubmitBtn role="RETURN" onClick={() => `${targetId("")} ${changeMode("GET")}`} />
                            <GbSubmitBtn role="PATCH" />
                        </>
                        :
                        <GbSubmitBtn role="POST" />
                    }
                </div>
            </fieldset>
        </form>
    )
}