'use client'

import { handleSubmit } from "./action.js";
import { useFormState } from "react-dom";
import scss from "./authForm.module.scss";

export default function AuthForm(props) {
    const initState = {
        success: null,
        message: ''
    }
    const [state, formAction] = useFormState(handleSubmit,initState)

    
    return (
        <form action={formAction}>
            <fieldset>
                <legend>관리자 인증 폼</legend>
                {props.auth ? 
                    <p className={scss.success_msg}>
                        관리자 인증에 성공하였습니다. 환영합니다.
                    </p>
                : 
                    <p className={scss.field}>
                        <input type="password" name="password" placeholder="인증번호 입력" />
                    </p>
                }
                {state?.success == false && <p className={scss.error_msg}>{state?.message}</p>}
                
                <div className="btn_set">
                    <button type="submit">{props.auth ? "로그아웃" : "로그인"}</button>
                </div>
            </fieldset>
        </form>
    )
}