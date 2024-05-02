const PlayErrorIcon = (props) =>  (
    <svg viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" className={props.className}>
        <path className="clr-i-outline clr-i-outline-path-1" d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z" />
        <path className="clr-i-outline clr-i-outline-path-2" d="M18,20.07a1.3,1.3,0,0,1-1.3-1.3v-6a1.3,1.3,0,1,1,2.6,0v6A1.3,1.3,0,0,1,18,20.07Z" />
        <circle className="clr-i-outline clr-i-outline-path-3" cx={17.95} cy={23.02} r={1.5} />
        <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </svg>
)
export default PlayErrorIcon;