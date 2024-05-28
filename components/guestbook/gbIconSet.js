export default function GbIcon(props) {
    switch (props.shape) {
        case "Edit":
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10 3-3zM14 7.414l-9 9V19h2.586l9-9L14 7.414zm4 1.172L19.586 7 17 4.414 15.414 6 18 8.586z" />
                </svg>
            )
        case "Delete":
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" />
                </svg>
            )
        case "Reply":
            return (
                <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <path d="M2 2H20V3H21V17H20V18H12V19H11V20H10V21H6V18H2V17H1V3H2V2M3 4V16H8V19H9V18H10V17H11V16H19V4H3Z" />
                </svg>
            )
        case "Prev":
            return (
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <polygon points="30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24" />
                </svg>
            )
        case "Next":
            return (
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label={props.alt ? props.alt : props.shape}>
                    <polygon points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24" />
                </svg>
            )
        default:
            return null;
    }
};

