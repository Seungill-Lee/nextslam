'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import scss from "./gnb.module.scss";
import { useState } from 'react';

const menuData = [
    {name: "Home", path: "/"},
    {name: "Overview", path: "/overview"},
    {name: "Character", path: "/team"},
    {name: "Soundtrack", path: "/soundtrack"},
    {name: "Guestbook", path: "/guestbook"},
]

export default function GNB() {
    const pathname = usePathname()
    const [gnbOpen,stateGnbOepn] = useState(false)

    return (
        <>
            <button type="button" id={scss.btn_gnb} className={gnbOpen ? scss.on : ""} onClick={() => !gnbOpen ? stateGnbOepn(true) : stateGnbOepn(false)}>
                <span className={scss.bar}></span>
                <span className={scss.bar}></span>
                <span className={scss.bar}></span>
                <span className={scss.txt}>Gnb Open</span>
            </button>
            <nav id={scss.gnb} className={gnbOpen ? scss.on : ""}>
                <ul>
                    {
                        menuData.map((a, i) => {
                            return (
                                <li key={i}><Link href={a.path} className={pathname == a.path || pathname.indexOf(a.path+"/") > -1 ? scss.active : ''} onClick={() => gnbOpen ? stateGnbOepn(false) : ""}>{a.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div id={scss.bg_modal_gnb} className={gnbOpen ? scss.on : ""}></div>
        </>
    );
}