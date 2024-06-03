'use client'

import scss from "./gbDeletor.module.scss";
import { useState, useEffect, useRef } from 'react';
import { handleSubmit } from "./gbAction.js";
import { useFormState } from 'react-dom';
import GbSubmitBtn from "./gbSubmitBtn.js";

export default function GbDeletor(props) {
    const mode = props.mode;
    const gb = props.data;
    const targetId = props.targetId;
    const changeMode = props.changeMode;
    const initialState = {
        success: null,
        message: '',
    }

    const [gbId,setGbId] = useState();
    const [gbPassword,setGbPassword] = useState();
    const gbSubmit = handleSubmit.bind(null,"DELETE",gbId,gbPassword);
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
            setGbPassword("");
            pwInput.current.focus();
        }
    },[state])

    return(
        <form className={scss.gb_deletor} action={formAction}>
            <p className={scss.msg}>정말 삭제하시겠습니까??</p>
            <div className={scss.field}>
                <input type="password" name="password" placeholder="비빌번호 확인" value={gbPassword || ""} onChange={(e) => setGbPassword(e.target.value)} title="영문+숫자+특수문자를 조합한 8~16자리" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$" ref={pwInput} required />
            </div>
            <div className={scss.btn_delete}>
                <GbSubmitBtn role="RETURN" onClick={() => `${targetId("")} ${changeMode("GET")}`} />
                <GbSubmitBtn role="DELETE" />
            </div>
        </form>
    )
}