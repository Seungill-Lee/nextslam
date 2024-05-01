import Image from "next/image";
import scss from "./page.module.scss";
import GbWrite from "/components/guestbook/gbWrite.js";
import GbList from "/components/guestbook/gbList.js";

export const metadata = {
    title: "방명록",
};

export default function Guestbook() {
    return (
        <div className={scss.guestbook}>
            <h2>방명록</h2>
            <GbWrite />
            <GbList />
        </div>
    );
}
