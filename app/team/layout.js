import Link from 'next/link';
import Image from "next/image";
import Team from './teamList.js';
import scss from "./layout.module.scss";

export const metadata = {
  title: "등장인물 | Next Slam",
};

export default function RootLayout({ children }) {
    return (
        <article id={scss.team}>
            <h2>등장인물</h2>
            <Team />
            { children }
        </article>
    );
}
