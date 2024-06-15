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

//Input Pattern
const pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
const emailPattern = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export async function handleSubmit(mode,gbId,gbNewPw,previousState,formData) {
    const ncryptObject = new ncrypt(process.env.NCRYPT_SECRET_KEY);
    const gbID = gbId || "";
    const newPassword = gbNewPw;
    let oldData;
    let oldPassword;
    const masterPassword = process.env.MASTER_AUTH_PASSWORD;

    const data = {
        name: formData.get("name"),
        password: ncryptObject.encrypt(newPassword),
        email: formData.get("email"),
        dateTime: moment().add(9, 'h').format("YYYY-MM-DD HH:mm:ss"), //utc 시간을 kst로 변경
        content: formData.get("content")
    }

    await client.connect();
    const db = client.db('nextslam');
    const collection = db.collection('guestbook');

    switch(mode) {
        case "POST":
            if(data.name.length < 2 || data.name.length > 8) {
                return {
                    success: false,
                    errorInput: "name",
                    message: "이름 길이가 적절치 않습니다."
                }
            }
            if(!pwPattern.test(newPassword)) {
                return {
                    success: false,
                    errorInput: "password",
                    message: "유효하지 않은 비밀번호 패턴 입니다."
                }
            }
            if(!emailPattern.test(data.email)) {
                return {
                    success: false,
                    errorInput: "email",
                    message: "유효하지 않은 이메일 패턴 입니다."
                }
            }
            if(data.content.length < 30 || data.content.length > 1000) {
                return {
                    success: false,
                    errorInput: "content",
                    message: "내용 길이가 적절치 않습니다."
                }
            }
            await collection.insertOne(data);
            revalidatePath("/guestbook");
            return {
                success: true,
                message: ""
            }
        case "PATCH":
            if(data.name.length < 2 || data.name.length > 8) {
                return {
                    success: false,
                    errorInput: "name",
                    message: "이름 길이가 적절치 않습니다."
                }
            }
            if(!pwPattern.test(newPassword)) {
                return {
                    success: false,
                    errorInput: "password",
                    message: "유효하지 않은 비밀번호 패턴 입니다."
                }
            } else {
                oldData = await collection.findOne({"_id": new ObjectId(gbID)});
                oldPassword = oldData.password;
                if(ncryptObject.decrypt(oldPassword) != newPassword && newPassword != masterPassword) {
                    return {
                        success: false,
                        errorInput: "password",
                        message: "비밀번호가 틀렸습니다."
                    }
                }
            }
            if(!emailPattern.test(data.email)) {
                return {
                    success: false,
                    errorInput: "email",
                    message: "유효하지 않은 이메일 패턴 입니다."
                }
            }
            if(data.content.length < 30 || data.content.length > 1000) {
                return {
                    success: false,
                    errorInput: "content",
                    message: "내용 길이가 적절치 않습니다."
                }
            }
            const {password, ...pwExData} = data;
            const modifyData = {...pwExData, dateTime:moment().add(9, 'h').format("YYYY-MM-DD HH:mm:ss")+"(수정됨)"};  //utc 시간을 kst로 변경
            await collection.updateOne({"_id": new ObjectId(gbID)},{$set: modifyData});
            revalidatePath("/guestbook")
            return {
                success: true,
                message: ""
            }
        case "DELETE":
            if(!pwPattern.test(newPassword)) {
                return {
                    success: false,
                    errorInput: "password",
                    message: "유효하지 않은 비밀번호 패턴 입니다."
                }
            } else {
                oldData = await collection.findOne({"_id": new ObjectId(gbID)});
                oldPassword = oldData.password;
                if(ncryptObject.decrypt(oldPassword) != newPassword && newPassword != masterPassword) {
                    return {
                        success: false,
                        errorInput: "password",
                        message: "비밀번호가 틀렸습니다."
                    }
                }
            }
            await collection.deleteOne({"_id": new ObjectId(gbID)});
            revalidatePath("/guestbook")
            return {
                success: true,
                message: ""
            }
        default: null
    }
}