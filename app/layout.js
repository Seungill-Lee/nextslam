import Link from 'next/link';
import Image from 'next/image';
import { Libre_Franklin, Noto_Sans_KR } from "next/font/google";
import "./base.scss";
import scss from "./layout.module.scss";
import HeaderLogo from '../components/headerLogo.js';
import GNB from '../components/gnb.js';
import JotaiProvider from "../components/jotaiProvider.js"
import BgmPlayer from "../components/soundtrack/bgmPlayer.js";

export const metadata = {
    title: {
        template: "%s | Next Slam",
        default: "Next Slam"
    },
    author : [{ name: "이승일 Seungill Lee", url: "https://seungill-lee.github.io/portfolio/" }],
    generator : "Next.js",
    keywords: ['Next.js', 'React', 'Slamdunk', '슬램덩크'],
    description: "Next.js로 제작한 슬램덩크 팬사이트",
    referrer: "origin-when-cross-origin",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
    },
    verification: {
        google: '6d589bbpgf9SE3u5SiquJMJUxRIAm9_Qyd0uCqdZF_o',
    },
    openGraph: {
        title: {
            template: "%s | Next Slam",
            default: "Next Slam"
        },
        description: 'Next.js로 제작한 슬램덩크 팬사이트',
        url: process.env.SITE_URL,
        siteName: 'Next Slam',
        images: [
            {
                url: process.env.SITE_URL+'/images/photo_og_nextslam.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    }
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
                    <JotaiProvider>
                        <main id={scss.contents}>
                            {children}
                        </main>
                        <BgmPlayer />
                    </JotaiProvider>

                    <hr />

                    <footer id={scss.footer}>
                        <p className={scss.copyright}>
                            Copyrightⓒ 2024 <a href="https://seungill-lee.vercel.app/" target="_blank" title="새 창으로 열림">Seungill Lee</a>. All right reserved. <br />
                            Powered by <a href="https://www.mongodb.com/ko-kr" target="_blank" title="새 창으로 열림">MongoDB</a> and <a href="https://vercel.com/home" target="_blank" title="새 창으로 열림">Vercel</a>.
                        </p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
