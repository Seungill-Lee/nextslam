import GravatarN from "./gravatar.js";
import GbIcon from "./gbIconSet.js";
import scss from "./gbViewer.module.scss";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export default function GbViewer(props) {
    const gb = props.data;
    const targetId = props.targetId;
    const changeMode = props.changeMode;
    const initGbID = props.initId;

    const [inProp, setInProp] = useState(false);
    const inViewer = useRef();

    useEffect(function() {
        if(initGbID) {
            setInProp(true)
        }
    },[])

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
            <CSSTransition nodeRef={inViewer} in={inProp} timeout={200} classNames="my-node">
                {state => (
                    <div className={`${scss.content} ${scss[state]}`} ref={inViewer}>
                        {gb.content}
                    </div>
                )}
            </CSSTransition>
            <div className={scss.btn_set}>
                <button type="button" className={scss.btn_edit} onClick={() => `${targetId(gb._id)} ${changeMode("PATCH")}`}>
                    <GbIcon shape="Edit" /><span className={scss.txt}>수정</span>
                </button>
                <button type="button" className={scss.btn_delete} onClick={() => `${targetId(gb._id)} ${changeMode("DELETE")}`}>
                    <GbIcon shape="Delete" /><span className={scss.txt}>삭제</span>
                </button>
            </div>
        </div>
    )
}