'use server';

import { MongoClient, ObjectId } from 'mongodb'
import moment from 'moment';
import { revalidatePath } from 'next/cache';
import { cipher } from '../crypto.js'

// Connection URL
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const url = `mongodb+srv://${username}:${password}@cluster0.qhvgogq.mongodb.net/`;
const client = new MongoClient(url);

export async function handleSubmit(mode,gbId,formData) {
    const gbID = gbId;
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: cipher(formData.get("password")),
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
            break;
        case "PATCH":
            const modifyData = {...data, dateTime:moment().format("YYYY-MM-DD HH:mm:ss")+"(수정됨)"}
            await collection.replaceOne({"_id": objGbID},modifyData);
            break;
        case "DELETE":
            await collection.deleteOne({"_id": objGbID});
            break;
        default: null
    }

    revalidatePath("/guestbook")
}