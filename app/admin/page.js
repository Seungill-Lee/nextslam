import AuthForm from "/components/admin/authForm.js"
import scss from "./page.module.scss";
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export const metadata = {
    title: "관리자 인증",
};


export default async function Admin() {
    const session = await getIronSession(cookies(), { password:"pFdmQwmWve4wDjCZGxx76WXGrK4EDqhn", cookieName:"HompageAdministor" })
    return (
        <div className={scss.admin}>
            <h2>관리자 인증</h2>
            <AuthForm auth={session.authLogin} />
        </div>
    )
}