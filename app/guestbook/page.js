import { MongoClient } from 'mongodb'
import scss from "./page.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbList from "/components/guestbook/gbList.js";

export const metadata = {
    title: "방명록",
};

// Connection URL
const username = encodeURIComponent("ever9415");
const password = encodeURIComponent("TiZ2e9itcEWBOwOk");
const url = `mongodb+srv://${username}:${password}@cluster0.qhvgogq.mongodb.net/`;
const client = new MongoClient(url);

// Database Name
const dbName = 'next_slam';

export default async function Guestbook() {
    //try {
        await client.connect();
        const db = client.db(dbName);
        let gbData = await db.collection('guestbook').find().toArray();
        gbData.map((a)=>{
            a._id = a._id.toString()
            return JSON.stringify(a)
        })

        //const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+"/guestbook", { cache: "no-store" });
        //const gbData = await resp.json();

        return (
            <div className={scss.guestbook}>
                <h2>방명록</h2>
                {<GbEditor mode="POST" />}
                {<GbList data={gbData.reverse()} />}
            </div>
        );
    // } catch (error) {
    //     return (
    //         <p>DB 연결 오류</p>
    //     );
    // }
}