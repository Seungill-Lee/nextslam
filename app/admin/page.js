import AuthForm from "/components/admin/authForm.js"
import { GetAuth } from "/components/admin/getAuth.js";
import scss from "./page.module.scss";

export const metadata = {
    title: "관리자 인증",
};

export default async function Admin() {
    const session = await GetAuth();
    return (
        <div className={scss.admin}>
            <h2>관리자 인증</h2>
            <AuthForm auth={session.authLogin} />
        </div>
    )
}