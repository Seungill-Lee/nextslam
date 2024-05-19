'use server';

import moment from 'moment';
import { revalidatePath } from 'next/cache';
import { cipher } from '../crypto.js'

export async function handleSubmit(mode,gbId,formData) {
    const gbID = gbId;
    console.log(gbID)
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: cipher(formData.get("password")),
        dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        content: formData.get("content")
    }
    const options = {
        method: mode,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    //console.log(options["method"])

    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`/guestbook/${mode != "POST" ? gbID : ""}`, options);
    const gbData = await resp.json();

    revalidatePath("/guestbook")
}