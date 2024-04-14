'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import data from './data.json';
import scss from "./teamList.module.scss";

export default function GNB() {
    const pathname = usePathname();
    const [team, currentTeam] = useState(pathname);

    console.log(pathname)

    return (
        <ul className={`${scss.team_list} ${team.split("/").pop() != "team" ? scss.reduce : ''}`}>
            {
                data.team.map((a, i) => {
                    return (
                        <li key={i}>
                            <Link href={"/team/"+a.id} className={pathname == "/team/"+a.id ? scss.active : ''} onClick={() => {currentTeam(a.id)}}>
                                <figure>
                                    <div className={scss.tm_photo}><Image src={"/images/team/photo_sdt_"+a.id+".jpg"} alt="" width={403} height={596} /></div>
                                    <figcaption className={scss[a.id]}>
                                        <span className={scss.tm_logo}><Image src={"/images/team/logo_sdt_"+a.id+"_off.webp"} alt={a.orgName} width={a.logoSize.width} height={a.logoSize.height} /></span>
                                        <span className={scss.tm_txt}>{a.korName}</span>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}