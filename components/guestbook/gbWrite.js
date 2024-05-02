'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import moment from 'moment';
import scss from "./gbWrite.module.scss";
import { useId } from 'react';

export default function GbWrite() {
    const router = useRouter();
    const parhName = usePathname();
    const fieldId = useId();

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
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch("http://localhost:9999/guestbook",options).then(resp=>resp.json()).then(result=> {
                router.refresh();
            });
        }}>
            <fieldset>
                <legend>방명록 작성폼</legend>
                <dl>
                    <div className={`${scss.field} ${scss.name}`}>
                        <dt><label htmlFor={`${fieldId}name`}>이름</label></dt>
                        <dd><input type="text" name="name" id={`${fieldId}name`} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.password}`}>
                        <dt><label htmlFor={`${fieldId}password`}>비밀번호</label></dt>
                        <dd><input type="password" name="password" id={`${fieldId}password`} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.email}`}>
                        <dt><label htmlFor={`${fieldId}email`}>이메일</label></dt>
                        <dd><input type="email" name="email" id={`${fieldId}email`} required /></dd>
                    </div>
                    <div className={`${scss.field} ${scss.content}`}>
                        <dt><label htmlFor={`${fieldId}content`}>내용</label></dt>
                        <dd><textarea cols="30" rows="10" name="content" placeholder="내용을 입력해주세요." id={`${fieldId}content`} required></textarea></dd>
                    </div>
                </dl>
                <div className={scss.btn_submit}>
                    <button type="submit">등록하기</button>
                </div>
            </fieldset>
        </form>
    )
}