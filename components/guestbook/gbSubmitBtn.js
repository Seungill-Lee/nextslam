'use client'

import { useFormStatus } from 'react-dom';

export default function GbSubmitBtn(props) {
    const { pending } = useFormStatus();

    return (
        {
            "POST": <button type="submit" disabled={pending}>{pending ? "등록 중.." : "등록하기"}</button>,
            "RETURN": <button type="button" onClick={props.onClick} disabled={pending}>{"돌아가기"}</button>,
            "PATCH": <button type="submit" disabled={pending}>{pending ? "수정 중.." : "수정하기"}</button>,
            "DELETE": <button type="submit" disabled={pending}>{pending ? "삭제 중.." : "삭제하기"}</button>
        }[props.role]
    )
}
