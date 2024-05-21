'use client'

import { useAtom } from "jotai";
import { gbItemID , gbItemMode } from "../atom.js"

export function GbViewerBtn(props) {
    const gb = props.data;
    const [gbId, setGbId] = useAtom(gbItemID)
    const [gbMode, setGbMode] = useAtom(gbItemMode)

    switch (props.roles) {
        case "Edit":
            return (
                <button type="button" className={props.className} onClick={() => `${setGbId(gb._id)} ${setGbMode("PATCH")}`}>{props.children}</button>
            )
        case "Delete":
            return (
                <button type="button" className={props.className} onClick={() => `${setGbId(gb._id)} ${setGbMode("DELETE")}`}>{props.children}</button>
            )
        default:
            return null;
    }
}

export function GbEditorBtn(props) {
    const gb = props.data;
    const [gbId, setGbId] = useAtom(gbItemID)
    const [gbMode, setGbMode] = useAtom(gbItemMode)

    switch (props.roles) {
        case "Submit":
            return (
                <button type="submit">{props.children}</button>
            )
        case "Return":
            return (
                <button type="button" onClick={() => `${setGbId(gb._id)} ${setGbMode("GET")}`}>{props.children}</button>
            )
        default:
            return null;
    }
}