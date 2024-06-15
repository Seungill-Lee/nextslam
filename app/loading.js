import scss from "./loading.module.scss";
import LoadingIcon from "/components/loadingIcon.js";

export default function Loading() {
    return(
        <div className={scss.loading}>
            <LoadingIcon className={scss.ico} />
            <span className={scss.txt}>로딩 중..</span>
        </div>
    )
}