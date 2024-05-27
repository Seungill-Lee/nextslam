'use server';

import { MongoClient, ObjectId } from 'mongodb'
import moment from 'moment';
import { revalidatePath } from 'next/cache';
import ncrypt from "ncrypt-js";

// Connection URL
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const url = `mongodb+srv://${username}:${password}@cluster0.qhvgogq.mongodb.net/`;
const client = new MongoClient(url);

export async function handleSubmit(mode,gbId,gbOldPw,gbNewPw,previousState,formData) {
    const ncryptObject = new ncrypt(process.env.NCRYPT_SECRET_KEY);
    const gbID = gbId || "";
    const oldPassword = gbOldPw || "";
    const newPassword = gbNewPw;
    const masterPassword = process.env.MASTER_AUTH_PASSWORD;

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: ncryptObject.encrypt(newPassword),
        dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        content: formData.get("content")
    }

    await client.connect();
    const db = client.db('next_slam');
    const collection = db.collection('guestbook')

    switch(mode) {
        case "POST":
            await collection.insertOne(data);
            revalidatePath("/guestbook");
            break;
        case "PATCH":
            if(ncryptObject.decrypt(oldPassword) == newPassword || newPassword == masterPassword) {
                const {password, ...pwExData} = data
                const modifyData = {...pwExData, dateTime:moment().format("YYYY-MM-DD HH:mm:ss")+"(수정됨)"}
                await collection.updateOne({"_id": new ObjectId(gbID)},{$set: modifyData});
                revalidatePath("/guestbook")
                return {
                    success: true,
                    message: ""
                }
            } else {
                return {
                    success: false,
                    message: "비밀번호가 틀렸습니다."
                }
            }
            
        case "DELETE":
            if(ncryptObject.decrypt(oldPassword) == newPassword || newPassword == masterPassword) {
                await collection.deleteOne({"_id": new ObjectId(gbID)});
                revalidatePath("/guestbook")
                return {
                    success: true,
                    message: ""
                }
            } else {
                return {
                    success: false,
                    message: "비밀번호가 틀렸습니다."
                }
            }
        default: null
    }
}


// export async function handleSubmit(mode,gbId,gbOldPw,gbNewPw,previousState,formData) {
//     let ncryptObject = new ncrypt(process.env.NCRYPT_SECRET_KEY);
//     const gbID = gbId;
//     const oldPassword = gbOldPw || "";
//     const newPassword = gbNewPw;

//     const data = {
//         name: formData.get("name"),
//         email: formData.get("email"),
//         password: ncryptObject.encrypt(newPassword),
//         dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
//         content: formData.get("content")
//     }

    
//     const modifyData = {...data, dateTime:moment().format("YYYY-MM-DD HH:mm:ss")+"(수정됨)"}
    

//     const options = {
//         method: mode,
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(mode == "PATCH" ? modifyData : data)
//     }
//     const delOpt = {
//         method: "DELETE",
//     }

//     const resp = await fetch(process.env.PUBLIC_API_URL+`/guestbook/${mode != "POST" ? gbID : ""}`,mode == "DELETE" ? delOpt : options);
//     const gbData = await resp.json();

//     revalidatePath("/guestbook")
// }