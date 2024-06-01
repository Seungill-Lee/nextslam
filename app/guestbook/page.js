import { MongoClient } from 'mongodb'
import scss from "./page.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbList from "/components/guestbook/gbList.js";
import { GetAuth } from "/components/admin/getAuth.js";

export const metadata = {
    title: "방명록",
};

// Connection URL
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const url = `mongodb+srv://${username}:${password}@cluster0.qhvgogq.mongodb.net/`;
const client = new MongoClient(url);

export default async function Guestbook() {
    const session = await GetAuth();
    try {
        await client.connect();
        const db = client.db('next_slam');
        let gbData = await db.collection('guestbook').find().toArray();
        gbData.map((a)=>{
            delete a.password
            a._id = a._id.toString()
            return JSON.stringify(a)
        })

        return (
            <div className={scss.guestbook}>
                <h2>방명록</h2>
                <p className={scss.guide}>
                    비공개 문의는 <a href="https://seungill-lee.github.io/portfolio/#contact_us" target="_blank" title="새 창 열림">Contact Us</a>를 이용해 주세요.
                </p>
                <GbEditor mode="POST" />
                <GbList data={gbData.reverse()} auth={session.authLogin} />
            </div>
        );
    } catch (error) {
        return (
            <p>DB 연결 오류</p>
        );
    }

    // const resp = await fetch(process.env.PUBLIC_API_URL+"/guestbook", { cache: "no-store" });
    // const gbData = await resp.json();

    // try {
    //     return(
    //         <div className={scss.guestbook}>
    //             <h2>방명록</h2>
    //             {<GbEditor mode="POST" />}
    //             {<GbList data={gbData.reverse()} />}
    //         </div>
    //     );
    // } catch (error) {
    //     return (
    //         <p>DB 연결 오류</p>
    //     );
    // }
}