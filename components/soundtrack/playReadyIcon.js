"use client"

import Lottie from "react-lottie-player";
import lottieJson from "./playReadyLottie.json";

export default function PlayReady(props) {
    return (
        <div className={props.className}>
            <Lottie loop animationData={lottieJson} play={true} />
        </div>
    )
}