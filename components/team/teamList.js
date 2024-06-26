'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import data from './data.json';
import scss from "./teamList.module.scss";

export default function TeamList() {
    const pathname = usePathname();

    return (
        <ul className={`${scss.team_list} ${pathname.split("/").pop() != "team" ? scss.reduce : ''}`}>
            {
                data.team.map((a, i) => {
                    return (
                        <li key={i}>
                            <Link href={"/team/"+a.id} className={pathname == "/team/"+a.id ? scss.active : ''}>
                                <figure>
                                    <div className={scss.tm_photo}><Image src={"/images/team/photo_sdt_"+a.id+"_upscale.jpg"} alt="" width={403} height={596} priority={true} /></div>
                                    <figcaption className={scss[a.id]}>
                                        <span className={scss.tm_logo}><Image src={pathname == "/team/"+a.id ? "/images/team/logo_sdt_"+a.id+"_on.png" : "/images/team/logo_sdt_"+a.id+"_off.png"} alt={a.orgName} width={a.logoSize.width} height={a.logoSize.height} priority={true} /></span>
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