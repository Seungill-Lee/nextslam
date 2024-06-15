'use server'

import { MongoClient, ObjectId } from 'mongodb'
import moment from 'moment';
import 'moment/locale/ko';
import { revalidatePath } from 'next/cache';

// Connection URL
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const url = `mongodb+srv://${username}:${password}@cluster0.qhvgogq.mongodb.net/`;
const client = new MongoClient(url);

export async function handleSubmit(mode,gbID,gbNewPw,previousState,formData) {
    const newPassword = gbNewPw;
    const masterPassword = process.env.MASTER_AUTH_PASSWORD;

    const replyData = {
        "reply.dateTime": moment().format("YYYY-MM-DD HH:mm:ss") || "",
        "reply.content": formData.get("content") || ""
    }

    await client.connect();
    const db = client.db('nextslam');
    const collection = db.collection('guestbook');

    switch(mode) {
        case "POST":
            if(newPassword == masterPassword) {
                await collection.updateOne({"_id": new ObjectId(gbID)},{$set: replyData});
                revalidatePath("/guestbook");
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
            break;
        case "PATCH":
            if(newPassword == masterPassword) {
                const modifyData = {...replyData, "reply.dateTime":moment().format("YYYY-MM-DD HH:mm:ss")+"(수정됨)"};
                await collection.updateOne({"_id": new ObjectId(gbID)},{$set: modifyData});
                revalidatePath("/guestbook");
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
            if(newPassword == masterPassword) {
                await collection.updateOne({"_id": new ObjectId(gbID)},{$unset: {reply:""}});
                revalidatePath("/guestbook");
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