'use server'

import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

export async function GetAuth() {
    const session = await getIronSession(cookies(), { password:"pFdmQwmWve4wDjCZGxx76WXGrK4EDqhn", cookieName:"HompageAdministor" })

    return session
}