'use server'

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export async function GetAuth() {
    const session = await getIronSession(cookies(), { password:process.env.AUTH_COOKIE_PASSWORD, cookieName:process.env.AUTH_COOKIE_NAME })

    return session
}