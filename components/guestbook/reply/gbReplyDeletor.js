'use client'

import GbReplyProfile from "./gbReplyProfile.js";
import { useState, useEffect, useRef } from 'react';
import { handleSubmit } from "./gbReplyAction.js";
import { useFormState } from 'react-dom';
import scss from "./gbReplyDeletor.module.scss";

export default function GbReplyDeletor(props){
    const gb = props.data;
    const targetId = props.targetId;
    const changeReplyMode = props.changeReplyMode;
    const initialState = {
        success: null,
        message: '',
    }

    const [gbId,setGbId] = useState();
    const [gbReplyPassword,setGbReplyPassword] = useState();
    const gbSubmit = handleSubmit.bind(null,"DELETE",gbId,gbReplyPassword);
    const [state, formAction] = useFormState(gbSubmit,initialState);
    const pwInput = useRef();

    useEffect(() => {
        if(gb) {
            setGbId(gb._id);
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

    return(
        <GbReplyProfile gb={gb} targetId={targetId} changeReplyMode={changeReplyMode}>
            <form className={scss.deletor} action={formAction}>
                <p className={scss.msg}>정말 삭제하시겠습니까??</p>
                <div className={scss.field}>
                    <input type="password" name="password" placeholder="비빌번호 확인" value={gbReplyPassword || ""} onChange={(e) => setGbReplyPassword(e.target.value)} title="영문+숫자+특수문자를 조합한 8~16자리" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$" ref={pwInput} required />
                </div>
                <div className={scss.btn_delete}>
                    <button type="button" onClick={() => `${targetId(gb.id)} ${changeReplyMode("GET")}`}>취소하기</button>
                    <button type="submit">삭제하기</button>
                </div>
            </form>
        </GbReplyProfile>
    )
}
