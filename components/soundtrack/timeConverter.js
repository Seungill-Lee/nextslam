'use client'

export default function TimeConverter(props) {
    const orgMS = Math.ceil(props.millisecond);
    const min = Math.floor(orgMS / 60);
    const sec = Math.floor(orgMS % 60);

    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}