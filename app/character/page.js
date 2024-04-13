import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";

export const metadata = {
  title: "등장인물 | Next Slam",
};

export default function Character() {
    return (
        <article id={scss.charater}>
            <h2>등장인물</h2>
            
        </article>
    );
}
