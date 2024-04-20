
import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";
import STItem from "../../components/soundtrack/stItem.js";

export const metadata = {
    title: "사운드트랙 | Next Slam",
};

export default function Developer() {
    return (
        <>
            <h2>사운드트랙</h2>
            <ul className="soundtrack">
                <STItem songTit="너를좋아한다고" trackNum="1" />
                <STItem songTit="Crazy for you" trackNum="2" />
                <STItem songTit="빛나는 순간에 사로잡혀" trackNum="3" />
            </ul>
        </>
    );
}
