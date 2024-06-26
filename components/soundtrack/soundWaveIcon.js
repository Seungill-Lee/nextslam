"use client"

import Lottie from "react-lottie-player";
import lottieJson from "./soundWaveLottie.json";

export default function SoundWaveIcon(props) {
    return (
        <div className={props.className}>
            <Lottie loop animationData={lottieJson} play={props.playIs} />
        </div>
    )
}