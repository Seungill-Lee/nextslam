'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'
import { RecoilRoot } from 'recoil';

export default function RecoilRootWrapper({ children }) {
    const pathname = usePathname()

    //컴포넌트를 호출할 때 마다 스크롤 최상단으로
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <RecoilRoot>{ children }</RecoilRoot>
}