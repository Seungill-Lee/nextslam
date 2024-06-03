'use client';

import { useFormStatus } from "react-dom"

export function GbPending() {
    const { pending } = useFormStatus();

    return { pending }
}
