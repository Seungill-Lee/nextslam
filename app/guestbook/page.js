import { MongoClient } from 'mongodb'
import scss from "./page.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbList from "/components/guestbook/gbList.js";

export const metadata = {
    title: "방명록",
};

// Connection URL
const username = encodeURIComponent(process.env.NEXT_PUBLIC_DB_USERNAME);
const password = encodeURIComponent(process.env.NEXT_PUBLIC_DB_PASSWORD);
const url = `mongodb+srv://${username}:${password}@cluster0.qhvgogq.mongodb.net/`;
const client = new MongoClient(url);

export default async function Guestbook() {
    try {
        await client.connect();
        const db = client.db('next_slam');
        let gbData = await db.collection('guestbook').find().toArray();
        gbData.map((a)=>{
            a._id = a._id.toString()
            return JSON.stringify(a)
        })

        return (
            <div className={scss.guestbook}>
                <h2>방명록</h2>
                <GbEditor mode="POST" />
                <GbList data={gbData.reverse()} />
            </div>
        );
    } catch (error) {
        return (
            <p>DB 연결 오류</p>
        );
    }
}