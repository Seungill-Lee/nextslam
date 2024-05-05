'use client'

import GbEditor from "/components/guestbook/gbEditor.js";
import GbViewer from "/components/guestbook/gbViewer.js";
import GbDeletor from "/components/guestbook/gbDeletor.js";
import { useRecoilValue } from "recoil";
import { gbItemID , gbItemMode } from "../atom.js"

export default function GbListItem(props) {
    const gbId = useRecoilValue(gbItemID)
    const gbMode = useRecoilValue(gbItemMode)

    return(
        <li>
            {
                gbId == props.post_id ?
                    {
                        "GET": <GbViewer data={props.data} />,
                        "PATCH" : <GbEditor mode="PATCH" data={props.data} />,
                        "DELETE" : <GbDeletor data={props.data} />,
                    }[gbMode]
                : <GbViewer data={props.data} />
            }
        </li>
    )
}