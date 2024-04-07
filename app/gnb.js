'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import scss from "./layout.module.scss";

const menuData = [
    {name: "Home", path: "/"},
    {name: "Overview", path: "/overview"},
    {name: "Character", path: "/character"},
    {name: "Developer", path: "/developer"},
    {name: "Guestbook", path: "/guestbook"},
]

export default function GNB() {
    const pathname = usePathname()

    return (
        <nav id={scss.gnb}>
            <ul>
                {
                    menuData.map((a, i) => {
                        return (
                            <li key={i}><Link href={a.path} className={pathname == a.path ? scss.active : ''}>{a.name}</Link></li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}