import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";

export const metadata = {
    title: "등장인물(Character)",
    description: "고교 내 주요 등장인물 소개(Introducing the main characters in the team)",
    openGraph: {
        title: "등장인물(Character)",
        description: "고교 내 주요 등장인물 소개(Introducing the main characters in the team)",
        url: process.env.SITE_URL+"/team",
        siteName: 'Next Slam',
        images: [
            {
                url: '/images/photo_og_nextslam.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    }
};

export default function TeamList() {
    return (
        <></>
    );
}
