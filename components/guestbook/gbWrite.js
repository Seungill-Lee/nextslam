'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import scss from "./gbWrite.module.scss";
import { useState, useEffect } from 'react'

export default function GbWrite() {
    const router = useRouter();
    const parhName = usePathname();

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            let data = {
                name: e.target.name.value,
                password: e.target.password.value,
                email: e.target.email.value,
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
                console.log(result)
            });
        }}>
            <fieldset>
                <legend>방명록 작성폼</legend>
                <dl>
                    <div className="field">
                        <dt>이름:</dt>
                        <dd><input type="text" name="name" required /></dd>
                    </div>
                    <div className="field">
                        <dt>비밀번호:</dt>
                        <dd><input type="password" name="password" required /></dd>
                    </div>
                    <div className="field">
                        <dt>이메일:</dt>
                        <dd><input type="email" name="email" required /></dd>
                    </div>
                    <div className="field">
                        <dt>내용:</dt>
                        <dd><textarea cols="30" rows="10" name="content" placeholder="내용을 입력해주세요." required></textarea></dd>
                    </div>
                </dl>
                <div className="btn_submit">
                    <button type="submit">등록하기</button>
                </div>
            </fieldset>
        </form>
    )
}