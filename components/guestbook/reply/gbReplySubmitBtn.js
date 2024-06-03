'use client'

import scss from './gbReplySubmitBtn.module.scss';
import { useFormStatus } from 'react-dom';

export default function GbReplySubmitBtn(props) {
    const { pending } = useFormStatus();

    return (
        {
            "POST": <button className={scss.btn} type="submit" disabled={pending}>{pending ? "등록 중.." : "등록하기"}</button>,
            "CANCEL": <button className={scss.btn} type="button" onClick={props.onClick} disabled={pending}>{"취소하기"}</button>,
            "PATCH": <button className={scss.btn} type="submit" disabled={pending}>{pending ? "수정 중.." : "수정하기"}</button>,
            "DELETE": <button className={scss.btn} type="submit" disabled={pending}>{pending ? "삭제 중.." : "삭제하기"}</button>
        }[props.role]
    )
}
