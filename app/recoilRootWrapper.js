'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

export default function RecoilRootWrapper({ children }) {
    return <RecoilRoot>{ children }</RecoilRoot>
}