export default function AuthIcon(props) {
    switch (props.shape) {
        case "Login":
            return (
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={props.className} aria-label={props.alt ? props.alt : props.shape}>
                    <g>
                        <path d="M490.667,0h-384C94.885,0,85.333,9.551,85.333,21.333v149.333c0,11.782,9.551,21.333,21.333,21.333
                            c11.782,0,21.333-9.551,21.333-21.333v-128h341.333v426.667H128v-128c0-11.782-9.551-21.333-21.333-21.333
                            c-11.782,0-21.333,9.551-21.333,21.333v149.333c0,11.782,9.551,21.333,21.333,21.333h384c11.782,0,21.333-9.551,21.333-21.333
                            V21.333C512,9.551,502.449,0,490.667,0z"/>
                        <path d="M198.248,326.251c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l85.333-85.333
                            c0.004-0.004,0.006-0.008,0.01-0.011c0.493-0.494,0.96-1.012,1.403-1.552c0.203-0.247,0.379-0.507,0.569-0.761
                            c0.227-0.303,0.462-0.6,0.673-0.916c0.203-0.304,0.379-0.619,0.565-0.931c0.171-0.286,0.35-0.565,0.508-0.859
                            c0.17-0.318,0.314-0.644,0.467-0.969c0.145-0.307,0.298-0.609,0.429-0.923c0.13-0.315,0.236-0.637,0.35-0.957
                            c0.121-0.337,0.25-0.669,0.354-1.013c0.097-0.32,0.168-0.646,0.249-0.969c0.089-0.351,0.187-0.698,0.258-1.055
                            c0.074-0.375,0.119-0.753,0.173-1.13c0.044-0.311,0.104-0.617,0.135-0.933c0.138-1.4,0.138-2.811,0-4.211
                            c-0.031-0.315-0.09-0.621-0.135-0.933c-0.054-0.377-0.098-0.756-0.173-1.13c-0.071-0.358-0.169-0.704-0.258-1.055
                            c-0.081-0.324-0.152-0.649-0.249-0.969c-0.104-0.344-0.233-0.677-0.354-1.013c-0.115-0.32-0.22-0.642-0.35-0.957
                            c-0.13-0.315-0.284-0.616-0.429-0.923c-0.153-0.324-0.297-0.651-0.467-0.969c-0.158-0.294-0.337-0.573-0.508-0.859
                            c-0.186-0.312-0.362-0.627-0.565-0.931c-0.211-0.316-0.446-0.612-0.673-0.916c-0.19-0.254-0.366-0.514-0.569-0.761
                            c-0.443-0.54-0.91-1.059-1.403-1.552c-0.004-0.004-0.006-0.008-0.01-0.011l-85.333-85.333c-8.331-8.331-21.839-8.331-30.17,0
                            c-8.331,8.331-8.331,21.839,0,30.17l48.915,48.915H21.333C9.551,234.669,0,244.22,0,256.002s9.551,21.333,21.333,21.333h225.83
                            L198.248,326.251z"/>
                    </g>
                </svg>
            )
        case "Logout":
            return (
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={props.className} aria-label={props.alt ? props.alt : props.shape}>
                    <g>
                        <path d="M508.184,249.202c0.203-0.247,0.379-0.507,0.568-0.76c0.227-0.304,0.463-0.601,0.674-0.917
                            c0.203-0.303,0.379-0.618,0.565-0.93c0.171-0.286,0.35-0.565,0.508-0.86c0.17-0.318,0.314-0.645,0.467-0.969
                            c0.145-0.307,0.298-0.609,0.428-0.923c0.13-0.315,0.235-0.636,0.35-0.956c0.121-0.337,0.25-0.67,0.355-1.015
                            c0.097-0.32,0.168-0.645,0.249-0.968c0.089-0.351,0.187-0.698,0.258-1.056c0.074-0.375,0.118-0.753,0.172-1.13
                            c0.044-0.311,0.104-0.618,0.135-0.933c0.138-1.4,0.138-2.811,0-4.211c-0.031-0.315-0.09-0.621-0.135-0.932
                            c-0.054-0.378-0.098-0.756-0.173-1.13c-0.071-0.358-0.169-0.704-0.258-1.055c-0.081-0.324-0.152-0.649-0.249-0.969
                            c-0.104-0.344-0.233-0.677-0.354-1.013c-0.115-0.32-0.22-0.642-0.35-0.957c-0.13-0.314-0.283-0.616-0.428-0.922
                            c-0.153-0.325-0.297-0.652-0.467-0.97c-0.157-0.294-0.337-0.573-0.507-0.859c-0.186-0.312-0.362-0.627-0.565-0.931
                            c-0.211-0.315-0.446-0.612-0.673-0.915c-0.19-0.254-0.367-0.515-0.57-0.762c-0.443-0.539-0.909-1.058-1.402-1.551
                            c-0.004-0.004-0.007-0.008-0.011-0.012l-64-64c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
                            l27.582,27.582H321.019c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h119.163l-27.582,27.582
                            c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l64-64c0.004-0.004,0.007-0.008,0.011-0.012
                            C507.275,250.26,507.741,249.742,508.184,249.202z"/>
                        <path d="M363.686,299.672c-11.782,0-21.333,9.551-21.333,21.333v106.667h-85.333V86.347v-0.008
                            c0-9.421-6.18-17.727-15.203-20.434l-74.11-22.233h174.647v106.667c0,11.782,9.551,21.333,21.333,21.333
                            s21.333-9.551,21.333-21.333v-128c0-11.782-9.551-21.333-21.333-21.333H22.353c-0.002,0-0.004,0-0.006,0
                            c-0.631-0.001-1.256,0.029-1.876,0.083C10.685,1.827,4.306,8.264,1.988,15.949c-0.149,0.478-0.279,0.966-0.395,1.46
                            c-0.012,0.053-0.022,0.107-0.034,0.161c-0.115,0.508-0.211,1.024-0.29,1.547c-0.011,0.074-0.023,0.147-0.034,0.221
                            c-0.067,0.477-0.12,0.96-0.155,1.449c-0.062,0.788-0.081,1.578-0.061,2.368v425.859c0,10.169,7.178,18.925,17.15,20.919
                            L231.502,512.6c13.201,2.64,25.517-7.457,25.517-20.919v-21.342h106.667c11.782,0,21.333-9.551,21.333-21.333v-128
                            C385.019,309.223,375.468,299.672,363.686,299.672z M214.353,465.658L43.686,431.525V51.02l170.667,51.2v346.785V465.658z"/>
                    </g>
                </svg>
            )
        default:
            return null;
    }
};