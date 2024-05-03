'use client'

import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import moment from 'moment';
import scss from "./gbWrite.module.scss";
import { useId, useEffect, useRef } from 'react';

export default function GbWrite() {
    const router = useRouter();
    const Labeling = useId();
    const searchParams = useSearchParams()
    const editId = searchParams.get("edit_id");
    const gbwName = useRef();
    const gbwPassword = useRef();
    const gbwEmail = useRef();
    const gbwContent = useRef();

    useEffect(() => {
        if(editId) {
            fetch(`http://localhost:9999/guestbook/${editId}`,{cache:"no-store"}).then(resp=>resp.json()).then(result=> {
                gbwName.current.value = result.name;
                gbwPassword.current.value = result.password;
                gbwEmail.current.value = result.email;
                gbwContent.current.value = result.content;
            });
        }
    })
    return(
        <form className={scss.gb_write} onSubmit={(e) => {
            e.preventDefault();

            let data = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                content: e.target.content.value
            }
            const options = {
                method: `${editId ? "PATCH":"POST"}`,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:9999/guestbook/${editId ? editId : ""}`,options).then(resp=>resp.json()).then(result=> {
                router.push("/guestbook");
                router.refresh();
            });
        }}>
            <fieldset>
                <legend>방명록 작성폼</legend>
                <dl>
                    <div className={`${scss.field} ${scss.name}`} id="test">
                        <dt><label htmlFor={`${Labeling}name`}>이름</label></dt>
                        <dd><input type="text" name="name" id={`${Labeling}name`} ref={gbwName} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.password}`}>
                        <dt><label htmlFor={`${Labeling}password`}>비밀번호</label></dt>
                        <dd><input type="password" name="password" id={`${Labeling}password`} ref={gbwPassword} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.email}`}>
                        <dt><label htmlFor={`${Labeling}email`}>이메일</label></dt>
                        <dd><input type="email" name="email" id={`${Labeling}email`} ref={gbwEmail} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.content}`}>
                        <dt><label htmlFor={`${Labeling}content`}>내용</label></dt>
                        <dd><textarea cols="30" rows="10" name="content" placeholder="내용을 입력해주세요." ref={gbwContent} id={`${Labeling}content`} required></textarea></dd>
                    </div>
                </dl>
                <div className={scss.btn_submit}>
                    <button type="submit">등록하기</button>
                </div>
            </fieldset>
        </form>
    )
}