import Image from "next/image";
import scss from "./page.module.scss";
import GbWrite from "/components/guestbook/gbWrite.js";
import GravatarN from "/components/guestbook/gravatar.js";
import GbIcon from "/components/guestbook/gbIconSet.js";

export const metadata = {
    title: "방명록",
};

export default async function Guestbook() {
    try {
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
                                            {
                                                `${gb.content}`.split("\n").map(line => {
                                                    return (<>{line}<br /></>)
                                                })
                                            }
                                        </div>
                                        <div className={scss.btn_set}>
                                            <button type="button" className={scss.btn_edit}><GbIcon shape="Edit" /><span className={scss.txt}>수정</span></button>
                                            <button type="button" className={scss.btn_delete}><GbIcon shape="Delete" /><span className={scss.txt}>삭제</span></button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        );
    } catch(error) {
        return (
            <p>DB 연결 오류</p>
        )
    }
}
