import Image from "next/image";
import scss from "./page.module.scss";

export const metadata = {
    title: "방명록",
};

export default async function Guestbook() {
    const resp = await fetch("http://localhost:9999/guestbook");
    const guestbook = await resp.json();

    {/*async function handleSubmit(formData) {
        'use server';
    
        console.log(formData)
        await guestbook.insertOne(
            {
                id: formData.get('id'),
                name : formData.get('title'),
                email : formData.get('email'),
                password: formData.get('password'),
                content: formData.get('content'),
            }
        )
    }*/}

    return (
        <div className={scss.guestbook}>
            <h2>방명록</h2>
            <from>
                <fieldset>
                    <legend>방명록 작성폼</legend>
                    <input type="hidden" name="id" value={guestbook.length} />
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
                            <dd><input type="email" name="email" pattern=".+@example\.com" required /></dd>
                        </div>
                        <div className="field">
                            <dt>내용:</dt>
                            <dd><textarea cols="30" rows="10" placeholder="내용을 입력해주세요." required></textarea></dd>
                        </div>
                    </dl>
                    <div className="btn_submit">
                        <button type="submit">등록하기</button>
                    </div>
                </fieldset>
            </from>
            <ul className={scss.gb_list}>
                {
                    guestbook.map((gb,i) => {
                        return (
                            <li key={gb.id}>
                                <dl>
                                    <div className="field">
                                        <dt>이름:</dt>
                                        <dd>{gb.name}</dd>
                                    </div>
                                    <div className="field">
                                        <dt>이메일:</dt>
                                        <dd>{gb.email}</dd>
                                    </div>
                                    <div className="field">
                                        <dt>내용:</dt>
                                        <dd>{gb.content}</dd>
                                    </div>
                                </dl>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
