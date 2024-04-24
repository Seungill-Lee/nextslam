export default function BpIcon(props) {
    switch (props.shape) {
        case "Play":
            return (
                <svg viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M64 96L328 256 64 416 64 96Z" />
                </svg>
            )
        case "Pause":
            return (
                <svg viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" />
                </svg>
            )
        case "Prev":
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M20 4L8.66667 12L20 20V4Z" />
                    <path d="M4 20H6.66667V4H4V20Z" />
                </svg>
            )
        case "Next":
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M4 20L15.3333 12L4 4V20Z" />
                    <path d="M20 4H17.3333V20H20V4Z" />
                </svg>
            )
        case "Repeat":
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4v-3z" />
                </svg>
            )
        case "Playlist":
            return (
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z" />
                </svg>
            )
        case "Close":
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" aria-label={props.alt ? props.alt : props.shape}>
                    <polygon points="20.3,21.7 12,13.4 3.7,21.7 2.3,20.3 10.6,12 2.3,3.7 3.7,2.3 12,10.6 20.3,2.3 21.7,3.7 13.4,12 21.7,20.3" />
                </svg>
            )
        default:
            return null;
    }
};

