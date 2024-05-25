'use client'

import scss from "./gbEditor.module.scss";
import { useRouter } from 'next/navigation';
import { useId, useState, useEffect } from 'react';
import { handleSubmit } from "./gbAction.js";
import { useFormState } from 'react-dom';

export default function GbWrite(props) {
    const Labeling = useId();
    const mode = props.mode;
    const gb = props.data;
    const targetId = props.targetId;
    const updateTargetId = props.updateTargetId;
    const changeMode = props.changeMode;
    const initialState = {
        message: '',
    }

    const router = useRouter();
    const [gbId,setGbId] = useState();
    const [gbName, setGbName] = useState();
    const [orgGbPassword, checkOrgGbPassword] = useState();
    const [gbPassword, setGbPassword] = useState();
    const [gbEmail, setGbEmail] = useState();
    const [gbContent, setGbContent] = useState();
    const gbSubmit = handleSubmit.bind(null,mode,gbId,orgGbPassword,gbPassword);
    const [state, formAction] = useFormState(gbSubmit,initialState);

    useEffect(() => {
        if(gb) {
            //console.log(gb._id)
            setGbId(gb._id);
            setGbName(gb.name)
            setGbPassword(null);
            setGbEmail(gb.email)
            setGbContent(gb.content)

            if(mode == "PATCH") {
                //console.log(gb.password)
                checkOrgGbPassword(gb.password)
            }
        }
    },[])

    return(
        <form className={scss.gb_editor} onSubmit={(e) => {
            const gbEditform = e.target;

            if(mode == "PATCH") {
                if(state) {
                    alert("비밀번호가 틀렸습니다.");
                    setGbPassword("");
                    gbEditform.password.focus();
                    return false;
                } else {
                    //console.log(gbId)
                    targetId(gbId)
                    changeMode("GET")
                }
            } else {
                setGbName("")
                setGbPassword("");
                setGbEmail("")
                setGbContent("")
                router.push("/guestbook")
            }
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
                            <button type="button" onClick={() => `${targetId("")} ${changeMode("GET")}`}>돌아가기</button>
                            <button type="submit">수정하기</button>
                        </>
                        :
                        <button type="submit">등록하기</button>
                    }
                </div>
            </fieldset>
            <p>{state?.message}</p>
        </form>
    )
}