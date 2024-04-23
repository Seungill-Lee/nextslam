'use client'

import * as React from "react";

const btnPlay = (props) => (
    <svg viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M64 96L328 256 64 416 64 96Z" />
    </svg>
);

const btnPause = (props) => (
    <svg viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" />
    </svg>
);

const btnPrev = (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M20 4L8.66667 12L20 20V4Z" />
        <path d="M4 20H6.66667V4H4V20Z" />
    </svg>
);

const btnNext = (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M4 20L15.3333 12L4 4V20Z" />
        <path d="M20 4H17.3333V20H20V4Z" />
    </svg>
);

const btnPlaylist = (props) => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z" />
    </svg>
);





export {btnPlay, btnPause, btnPrev, btnNext, btnPlaylist};
