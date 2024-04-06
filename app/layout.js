import { Libre_Franklin } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import "./base.css";
import scss from "./layout.module.scss";

const libreFranklin = Libre_Franklin({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    opticalSizing: "auto",
});

const notoSansKr = Noto_Sans_KR({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    opticalSizing: ["auto"],
});

export const metadata = {
    title: "Next Slam",
    author : "이승일 Seungill Lee",
    generator : "Next.js 14",
    description: "Next.js로 제작된 슬램덩크 팬사이트",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={notoSansKr.className}>
                <div id={scss.wrapper}>
                    <header id={scss.header}>
                        <h1><Image src="/images/logo_nextslam.svg" alt="Next Slam" width={355} height={40} /></h1>
                        <nav id={scss.gnb}>
                            <ul className={libreFranklin.className}>
                                <li><Link href="./" className={scss.active}>Home</Link></li>
                                <li><Link href="/overview">Overview</Link></li>
                                <li><Link href="/character">Character</Link></li>
                                <li><Link href="/developer">Developer</Link></li>
                                <li><Link href="/guestbook">Guestbook</Link></li>
                            </ul>
                        </nav>
                    </header>
                    
                    <hr />

                    <main id={scss.contents}>
                        {children}
                    </main>

                    <hr />

                    <footer id={scss.footer}>
                        <p className={scss.copyright}>
                            Copyrightⓒ 2024 Seungill Lee. All right reserved. <br />
                            Powered by <a href="https://github.com/" target="_blank" title="새 창으로 열림">Github</a> and <a href="https://nextjs.org/blog/next-14" target="_blank" title="새 창으로 열림">Next.js 14</a>.
                        </p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
