import Image from "next/image";

import scss from "./page.module.scss";
import GbWrite from "/components/guestbook/gbWrite.js";
import GravatarN from "/components/guestbook/gravatar.js";
import GbListBtnSet from "/components/guestbook/gbListBtnSet.js";

export default async function Guestbook() {
    try {
        const resp = await fetch("http://localhost:9999/guestbook", { cache: "no-store" });
        const guestbook = await resp.json();

        return (
            <>
                <div className={scss.guestbook}>
                    <h2>방명록</h2>
                    <GbWrite />
                    <ul className={scss.gb_list}>
                        {guestbook.reverse().map((gb, i) => {
                            return (
                                <li key={gb.id}>
                                    <div className={scss.profile}>
                                        <div className={scss.photo}>
                                            <GravatarN email={gb.email} />
                                        </div>
                                        <div className={scss.info}>
                                            <div className={scss.name}>{gb.name}</div>
                                            <div className={scss.date_time}>{gb.dateTime}</div>
                                        </div>
                                    </div>
                                    <div className={scss.content}>
                                        {`${gb.content}`.split("\n").map(line => {
                                            return (<>{line}<br /></>);
                                        })}
                                    </div>
                                    <GbListBtnSet post_id={gb.id} />
                                </li>
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