'use client'

import { useRouter, useSearchParams } from "next/navigation";
import scss from "./gbDeletor.module.scss";
import { useRecoilState } from "recoil";
import { gbItemID , gbItemMode } from "../atom.js"

export default function GbDeletor(props) {
    const [ gbId, setGbId ] = useRecoilState(gbItemID)
    const [ gbMode, setGbMode ] = useRecoilState(gbItemMode)

    return(
        <div className={scss.gb_deletor}>
            <p className={scss.msg}>정말 삭제하시겠습니까??</p>
            <form>
                <div className={scss.field}>
                    <input type="password" placeholder="비빌번호 확인" title="해당 게시물의 비밀번호를 입력해주세요." />
                </div>
                <div className={scss.btn_set}>
                    <button type="button">돌아가기</button>
                    <button type="submit">삭제하기</button>
                </div>
            </form>
        </div>
    )
}