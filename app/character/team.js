'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";
import scss from "./layout.module.scss";

const menuData = [
    {name: "shohoku", orgName: "Shohoku", korName: "상북"},
    {name: "ryonan", orgName: "Ryonan", korName: "능남"},
    {name: "shoyo", orgName: "Shoyo", korName: "상양"},
    {name: "kainan", orgName: "Kainan", korName: "해남"},
]

export default function GNB() {
    const pathname = usePathname()

    return (
        /* <nav id={scss.gnb}>
            <ul>
                {
                    menuData.map((a, i) => {
                        return (
                            <li key={i}><Link href={a.path} className={pathname == a.path ? scss.active : ''}>{a.name}</Link></li>
                        )
                    })
                }
            </ul>
        </nav> */

        <ul className={scss.team_list}>
            <li>
                <Link href="./shohoku">
                    <figure>
                        <div className={scss.tm_photo}><Image src="/images/team/photo_sdt_shohoku.jpg" alt="" width={403} height={596} /></div>
                        <figcaption className={scss.shohoku}>
                            <span className={scss.tm_logo}><Image src="/images/team/logo_sdt_shohoku_off.webp" overrideSrc="/images/team/logo_sdt_shohoku_on.webp" alt="Shohoku" width={200} height={83} /></span>
                            <span className={scss.tm_txt}>상북</span>
                        </figcaption>
                    </figure>
                </Link>
            </li>
            <li>
                <Link href="./ryonan">
                    <figure>
                        <div className={scss.tm_photo}><Image src="/images/team/photo_sdt_ryonan.jpg" alt="능남" width={403} height={596} /></div>
                        <figcaption className={scss.ryonan}>
                            <span className={scss.tm_logo}><Image src="/images/team/logo_sdt_ryonan_off.webp" overrideSrc="/images/team/logo_sdt_ryonan_on.webp" alt="Ryonan" width={156} height={83} /></span>
                            <span className={scss.tm_txt}>능남</span>
                        </figcaption>
                    </figure>
                </Link>
            </li>
            <li>
                <Link href="./shoyo">
                    <figure>
                        <div className={scss.tm_photo}><Image src="/images/team/photo_sdt_shoyo.jpg" alt="상양" width={403} height={596} /></div>
                        <figcaption className={scss.shoyo}>
                            <span className={scss.tm_logo}><Image src="/images/team/logo_sdt_shoyo_off.webp" overrideSrc="/images/team/logo_sdt_shoyo_on.webp" alt="Shoyo" width={200} height={56} /></span>
                            <span className={scss.tm_txt}>상양</span>
                        </figcaption>
                    </figure>
                </Link>
            </li>
            <li>
                <Link href="./kainan">
                    <figure>
                        <div className={scss.tm_photo}><Image src="/images/team/photo_sdt_kainan.jpg" alt="해남" width={403} height={596} /></div>
                        <figcaption className={scss.kainan}>
                            <span className={scss.tm_logo}><Image src="/images/team/logo_sdt_kainan_off.webp" overrideSrc="/images/team/logo_sdt_kainan_on.webp" alt="Kainan" width={174} height={80} /></span>
                            <span className={scss.tm_txt}>해남</span>
                        </figcaption>
                    </figure>
                </Link>
            </li>
        </ul>
    );
}