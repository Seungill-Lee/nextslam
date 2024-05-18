import GravatarN from "./gravatar.js";
import { GbViewerBtn } from "./gbBtnSet.js";
import GbIcon from "./gbIconSet.js";
import scss from "./gbViewer.module.scss";

export default function GbViewer(props) {
    const gb = props.data;

    //console.log(gbId,gbMode)

    return(
        <div className={scss.gb_viewer}>
            <div className={scss.profile}>
                <div className={scss.photo}>
                    <GravatarN email={gb.email} />
                </div>
                <div className={scss.info}>
                    <div className={scss.name}>{gb.name}</div>
                    <div className={scss.date_time}>{gb.dateTime}</div>
                </div>
            </div>
            <div className={scss.content}>
                {gb.content}
            </div>
            <div className={scss.btn_set}>
                <GbViewerBtn roles="Edit" className={scss.btn_edit} data={gb}>
                    <GbIcon shape="Edit" /><span className={scss.txt}>수정</span>
                </GbViewerBtn>
                <GbViewerBtn roles="Delete" className={scss.btn_delete} data={gb}>
                    <GbIcon shape="Delete" /><span className={scss.txt}>삭제</span>
                </GbViewerBtn>
            </div>
        </div>
    )
}