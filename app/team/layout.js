import Link from 'next/link';
import Image from "next/image";
import TeamList from '../../components/team/teamList.js';
import scss from "./layout.module.scss";

export const metadata = {
    title: "등장인물",
};

export default function RootLayout({ children }) {
    return (
        <>
            <h2>등장인물</h2>
            <TeamList />
            { children }
        </>
    );
}
