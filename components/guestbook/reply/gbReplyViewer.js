import GbReplyProfile from "./gbReplyProfile.js";
import scss from "./gbReplyViewer.module.scss";

export default function GbReplyViewer(props){
    const gb = props.data;
    const targetId = props.targetId;
    const changeReplyMode = props.changeReplyMode;

    return(
        <GbReplyProfile auth={props.auth} gb={gb} targetId={targetId} changeReplyMode={changeReplyMode}>
            <div className={scss.viewer}>
                <div className={scss.date_time}>{gb.reply.dateTime}</div>
                <div className={`${scss.content}`}>
                    {gb.reply.content}
                </div>
            </div>
        </GbReplyProfile>
    )
}