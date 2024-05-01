import Image from "next/image";
import scss from "./page.module.scss";
import GbWrite from "/components/guestbook/gbWrite.js";

export const metadata = {
    title: "방명록",
};

export default async function Guestbook() {
    const resp = await fetch("http://localhost:9999/guestbook",{cache:"no-store"});
    const guestbook = await resp.json();

    return (
        <>
            <div className={scss.guestbook}>
                <h2>방명록</h2>
                <GbWrite />
                <ul className={scss.gb_list}>
                    {
                        guestbook.reverse().map((gb,i) => {
                            return (
                                <li key={gb.id}>
                                    <dl>
                                        <div className="field">
                                            <dt>이름:</dt>
                                            <dd>{gb.name}</dd>
                                        </div>
                                        <div className="field">
                                            <dt>작성일:</dt>
                                            <dd>{gb.date}</dd>
                                        </div>
                                        <div className="field">
                                            <dt>이메일:</dt>
                                            <dd>{gb.email}</dd>
                                        </div>
                                        <div className="field">
                                            <dt>내용:</dt>
                                            <dd>{gb.content}</dd>
                                        </div>
                                    </dl>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}
