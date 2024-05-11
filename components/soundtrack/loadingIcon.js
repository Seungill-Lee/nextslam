"use client"

import Lottie from "react-lottie-player";
import lottieJson from "./loadingLottie.json";

export default function LoadingIcon(props) {
    return (
        <div className={props.className}>
            <Lottie loop animationData={lottieJson} play={true} />
        </div>
    )
}