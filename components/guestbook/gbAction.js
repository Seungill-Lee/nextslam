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
    let ncryptObject = new ncrypt(process.env.NCRYPT_SECRET_KEY);
    const gbID = gbId;
    const oldPassword = gbOldPw || "";
    const newPassword = gbNewPw;

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: ncryptObject.encrypt(newPassword),
        dateTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        content: formData.get("content")
    }
    const objGbID = new ObjectId(gbID)

    await client.connect();
    const db = client.db('next_slam');
    const collection = db.collection('guestbook')

    switch(mode) {
        case "POST":
            await collection.insertOne(data);
            revalidatePath("/guestbook");
            break;
        case "PATCH":
            if(ncryptObject.decrypt(oldPassword) != newPassword) {
                return {
                    success: false,
                    message: "비밀번호가 틀렸습니다."
                }
            } else {
                const modifyData = {...data, dateTime:moment().format("YYYY-MM-DD HH:mm:ss")+"(수정됨)"}
                await collection.replaceOne({"_id": objGbID},modifyData);
                revalidatePath("/guestbook")
                return {
                    success: true,
                    message: ""
                }
            }
            
        case "DELETE":
            if(ncryptObject.decrypt(oldPassword) != newPassword) {
                return {
                    success: false,
                    message: "비밀번호가 틀렸습니다."
                }
            } else {
                await collection.deleteOne({"_id": objGbID});
                revalidatePath("/guestbook")
                return {
                    success: true,
                    message: ""
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