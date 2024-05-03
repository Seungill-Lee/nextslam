'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import moment from 'moment';
import scss from "./gbEditor.module.scss";
import { useId, useState, useEffect } from 'react';

export default function GbWrite(props) {
    const router = useRouter();
    const Labeling = useId();
    const gb = props.data;

    const [gbName,setGbName] = useState();
    const [gbEmail,setGbEmail] = useState();
    const [gbContent,setGbContent] = useState();

    useEffect(() => {
        if(gb) {
            setGbName(gb.name)
            setGbEmail(gb.email)
            setGbContent(gb.content)
        }
    },[])

    

    return(
        <form className={scss.gb_editor} onSubmit={(e) => {
            e.preventDefault();

            let data = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                content: e.target.content.value
            }
            const options = {
                method: props.mode,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:9999/guestbook/${gb.id ? gb.id : ""}`,options).then(resp=>resp.json()).then(result=> {
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
                        <dd><input type="password" name="password" id={`${Labeling}password`} required /></dd>
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
                    <button type="submit">{props.mode == "PATCH" ? "수정하기" : "등록하기"}</button>
                </div>
            </fieldset>
        </form>
    )
}