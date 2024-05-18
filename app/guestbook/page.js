import scss from "./page.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbList from "/components/guestbook/gbList.js";

export const metadata = {
    title: "방명록",
};

export default async function Guestbook() {
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+"/guestbook", { cache: "no-store" });
        const gbData = await resp.json();

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