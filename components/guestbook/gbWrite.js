'use client'

import { usePathname, useRouter, redirect } from 'next/navigation';
import Image from 'next/image';
import moment from 'moment';
import scss from "./gbWrite.module.scss";

export default function GbWrite() {
    const router = useRouter();
    const parhName = usePathname();

    return(
        <form onSubmit={(e) => {
            e.preventDefault();

            let orgCont = e.target.content.value;

            let data = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                content: orgCont
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