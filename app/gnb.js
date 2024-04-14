'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import scss from "./gnb.module.scss";

const menuData = [
    {name: "Home", path: "/"},
    {name: "Overview", path: "/overview"},
    {name: "Character", path: "/team"},
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
                            <li key={i}><Link href={a.path} className={pathname == a.path || pathname.indexOf(a.path+"/") > -1 ? scss.active : ''}>{a.name}</Link></li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}