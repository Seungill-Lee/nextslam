'use client'

import Gravatar from 'react-gravatar'

export default function GravatarN(props) {
    return <Gravatar email={props.email} size={50} />
}