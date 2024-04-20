
import Link from 'next/link';
import Image from "next/image";
import STItem from "../../components/soundtrack/stItem.js";
import scss from "./page.module.scss";
import data from '../../components/soundtrack/data.json';

export const metadata = {
    title: "사운드트랙 | Next Slam",
};

export default function Developer() {
    return (
        <>
            <h2>사운드트랙</h2>
            <ul className={scss.soundtrack}>
                {
                    data.map((a,i) => {
                        return (
                            <STItem songTit={a.title} trackNum={a.id} key={a.id} />
                        )
                    })
                }
            </ul>
        </>
    );
}
