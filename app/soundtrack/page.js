
import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";
import STItem from "./stItem.js";

export const metadata = {
    title: "사운드트랙 | Next Slam",
};

export default function Developer() {
    return (
        <>
            <h2>사운드트랙</h2>
            <ul className="soundtrack">
                <STItem songTit="너를좋아한다고" tkNum="1" />
                <STItem songTit="Crazy for you" tkNum="2" />
                <STItem songTit="빛나는 순간에 사로잡혀" tkNum="3" />
            </ul>
        </>
    );
}
