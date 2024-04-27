
import Link from 'next/link';
import Image from "next/image";
import StList from "../../components/soundtrack/stList.js";
import scss from "./page.module.scss";

export const metadata = {
    title: "사운드트랙 | Next Slam",
};

export default function Developer() {
    return (
        <>
            <h2>사운드트랙</h2>
            <div className={scss.soundtrack}>
                <StList />
            </div>
        </>
    );
}
