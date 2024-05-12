import Link from 'next/link';
import Image from 'next/image';
import { Libre_Franklin, Noto_Sans_KR } from "next/font/google";
import "./base.scss";
import scss from "./layout.module.scss";
import HeaderLogo from '../components/headerLogo.js';
import GNB from '../components/gnb.js';
import RecoilRoot from "../components/recoilRootWrapper.js"
import BgmPlayer from "../components/soundtrack/bgmPlayer.js";

export const metadata = {
    title: {
        template: "%s | Next Slam",
        default: "Next Slam"
    },
    author : "이승일 Seungill Lee",
    generator : "Next.js 14",
    description: "Next.js로 제작된 슬램덩크 팬사이트",
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
}

export const libre_franklin = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
    variable: '--libre-franklin',
})
   
export const noto_sans_kr = Noto_Sans_KR({
    subsets: [],
    display: 'swap',
    variable: '--noto-sans-kr',
})

export default function RootLayout({ children }) {
    return (
        <html lang="ko" className={`${libre_franklin.variable} ${noto_sans_kr.variable}`}>
            <body>
                <div id={scss.wrapper}>
                    <header id={scss.header}>
                        {/* <h1><Image src="/images/logo_nextslam.svg" alt="Next Slam" width={355} height={40} /></h1> */}
                        <h1><HeaderLogo alt="Next Slam" /></h1>
                        <GNB />
                    </header>
                    
                    <hr />
                    <RecoilRoot>
                        <main id={scss.contents}>
                            {children}
                        </main>
                        <BgmPlayer />
                    </RecoilRoot>

                    <hr />

                    <footer id={scss.footer}>
                        <p className={scss.copyright}>
                            Copyrightⓒ 2024 <a href="https://seungill-lee.github.io/portfolio/" target="_blank" title="새 창으로 열림">Seungill Lee</a>. All right reserved. <br />
                            Powered by <a href="https://github.com/" target="_blank" title="새 창으로 열림">Github</a> and <a href="https://nextjs.org/blog/next-14" target="_blank" title="새 창으로 열림">Next.js 14</a>.
                        </p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
