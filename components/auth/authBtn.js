import { signIn, signOut, auth } from "/auth";
import AuthIcon from "./authIconSet.js";
import scss from "./authBtn.modules.scss";

export function LoginButton(props) {
    return (
        <form action={async () => {
            "use server"
            await signIn("google")
        }} className={props.className}>
            <button type="submit">
                {props.children}
            </button>
        </form>
    )
}

export function LogoutButton(props) {
    return (
        <form action={async () => {
            "use server"
            await signOut("google")
        }} className={props.className}>
            <button type="submit">
                {props.children}
            </button>
        </form>
    )
}

export default async function AuthBtn() {
    const session = await auth()
 
    if (!session) {
        return (
            <LoginButton className={scss.btn_auth}>
                <AuthIcon shape="Login" className={scss.ico} />
                <span className={scss.txt}>Login</span>
            </LoginButton>
        )
    } else {
        return (
            <LogoutButton className={scss.btn_auth}>
                <AuthIcon shape="Logout" className={scss.ico} />
                <span className={scss.txt}>{session.user.email}</span>
            </LogoutButton>
        )
    }
}