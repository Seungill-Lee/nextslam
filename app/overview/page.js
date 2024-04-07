import Image from "next/image";
import scss from "./page.module.scss";

export const metadata = {
    title: "개요 | Next Slam",
};

export default function Overview() {
    return (
        <>
            <h2>개요</h2>
            <p>개요 입니다.</p>
        </>
    );
}
