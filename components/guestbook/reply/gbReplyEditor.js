'use client'

import { handleSubmit } from "./gbReplyAction.js"
import { useState, useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import scss from "./gbReplyEditor.module.scss";

export default function GbReplyEditor(props){
    const mode = props.mode;
    const gb = props.data;
    const targetId = props.targetId;
    const changeReplyMode = props.changeReplyMode;
    const initialState = {
        success: null,
        message: ''
    }

    const gbId = gb._id;
    const [gbReplyContent , setGbReplyContent] = useState();
    const [gbReplyPassword, setGbReplyPassword] = useState();
    const gbSubmit = handleSubmit.bind(null,mode,gbId,gbReplyPassword);
    const [state, formAction] = useFormState(gbSubmit,initialState);
    const pwInput = useRef();

    useEffect(() => {
        if(gb && mode == "PATCH") {
            //console.log(gb._id)
            setGbReplyContent(gb.reply.content);
            setGbReplyPassword(null);
        }
    },[])

    useEffect(() => {
        if(state?.success == false) {
            alert("비밀번호가 틀렸습니다.");
            setGbReplyPassword("");
            pwInput.current.focus();
        } else if(state?.success == true) {
            targetId(gbId)
            changeReplyMode("GET")
        }
    },[state])

    return (
        <form action={formAction}>
            <fieldset>
                <legend>댓글 쓰기</legend>
                <p className={scss.field}>
                    <textarea cols="30" rows="10" name="content" placeholder="답변내용 입력" value={gbReplyContent ? gbReplyContent : ""} onChange={(e) => setGbReplyContent(e.target.value)} required></textarea>
                </p>
                <p className={scss.field}>
                    <input type="password" name="password" placeholder="비밀번호 확인" ref={pwInput} value={gbReplyPassword ? gbReplyPassword : ""} onChange={(e) => setGbReplyPassword(e.target.value)} required />
                </p>
                <button type="button" onClick={()=> changeReplyMode("GET")}>취소하기</button>
                <button type="submit">등록하기</button>
            </fieldset>
        </form>
    )
}