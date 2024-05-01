'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import GbWrite from "./gbWrite.js"
import scss from "./gbList.module.scss";
import { useState, useEffect } from 'react'

export default function GbList() {
    const [guestbook,setGuestbook] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/guestbook",{cache: "no-cache"}).then(resp=>resp.json()).then(result=> {
            setGuestbook(result)
        });
    },[guestbook])

    return(
        <ul className={scss.gb_list}>
            {
                guestbook.map((gb,i) => {
                    return (
                        <li key={gb.id}>
                            <dl>
                                <div className="field">
                                    <dt>이름:</dt>
                                    <dd>{gb.name}</dd>
                                </div>
                                <div className="field">
                                    <dt>이메일:</dt>
                                    <dd>{gb.email}</dd>
                                </div>
                                <div className="field">
                                    <dt>내용:</dt>
                                    <dd>{gb.content}</dd>
                                </div>
                            </dl>
                        </li>
                    )
                })
            }
        </ul>
    )
}