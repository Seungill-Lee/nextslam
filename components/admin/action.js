'use server'

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export async function handleSubmit(previousState,formData) {
    const pwValue = formData.get("password");
    const masterPassword = process.env.MASTER_AUTH_PASSWORD;
    const session = await getIronSession(cookies(), { password:"pFdmQwmWve4wDjCZGxx76WXGrK4EDqhn", cookieName:"HompageAdministor" })

    if(!session.authLogin) {
        if(pwValue != masterPassword) {
            return {
                success: false,
                message: '인증번호가 틀렸습니다. 관리자가 아니라면 당장 나가주시기 바랍니다.'
            }
        } else if(pwValue == masterPassword) {
            session.authLogin = true;
            await session.save();

            return {
                success: true,
                message: ''
            }
        }
    } else if(session.authLogin) {
        session.destroy();

        return {
            success: null,
            message: ''
        }
    }
}