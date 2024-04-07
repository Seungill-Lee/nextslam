import Image from "next/image";
import scss from "./page.module.scss";

export const metadata = {
    title: "방명록 | Next Slam",
};


export default function Guestbook() {
    return (
        <>
            <h2>방명록</h2>
            <p>방명록 입니다.</p>
        </>
    );
}
