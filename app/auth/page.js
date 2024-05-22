import { signIn, signOut, auth } from "/components/auth/auth.js"
import scss from "./page.module.scss";

export const metadata = {
    title: "관리자 인증",
};


export default function AuthLogin() {
    return(
        <form action={async () => {
            "use server"


        }}>
            <fieldset>
                <legend>관리자 인증 로그인</legend>
                <p className={scss.field}>
                    <label htmlFor="authId">아이디</label>
                    <input type="text" id="authId" name="authId" />
                </p>
                <p className={scss.field}>
                    <label htmlFor="authPw">비밀번호</label>
                    <input type="password" id="authPw" name="authPw" />
                </p>
                <p className={scss.msg}></p>
                <div className={scss.btn_set}>
                    <button type="submit">로그인</button>
                </div>
            </fieldset>
        </form>
    )
}