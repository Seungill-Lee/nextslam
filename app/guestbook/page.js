import Image from "next/image";
import scss from "./page.module.scss";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbListItem from "/components/guestbook/gbListItem.js";

export default async function Guestbook() {
    try {
        const resp = await fetch("http://localhost:9999/guestbook", { cache: "no-store" });
        const guestbook = await resp.json();

        return (
            <>
                <div className={scss.guestbook}>
                    <h2>방명록</h2>
                    <GbEditor mode="POST" />
                    <ul className={scss.gb_list}>
                        {guestbook.reverse().map((gb, i) => {
                            return (
                                <GbListItem key={gb.id} post_id={gb.id} data={gb} />
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    } catch (error) {
        return (
            <p>DB 연결 오류</p>
        );
    }
}