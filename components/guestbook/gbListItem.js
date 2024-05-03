'use client'

import { useRouter, useSearchParams } from "next/navigation";
import GbEditor from "/components/guestbook/gbEditor.js";
import GbViewer from "/components/guestbook/gbViewer.js";
import scss from "./gbViewer.module.scss";

export default function GbListItem(props) {
    //console.log({...props})

    return(
        <li key={props.key}>
            <GbViewer data={props.data} />
            <GbEditor mode="PATCH" data={props.data} />
        </li>
    )
}