'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";
import data from './data.json';

export default function GNB() {
    const pathname = usePathname()

    return (
        <ul className={scss.team_list}>
            {
                data.team.map((a, i) => {
                    return (
                        <li key={i}>
                            <Link href={"/"+a.name} className={pathname == "/"+a.name ? scss.active : ''}>
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