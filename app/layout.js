import Link from 'next/link';
import Image from 'next/image';
import GNB from './gnb.js';
import "./base.css";
import scss from "./layout.module.scss";
import TestPlayer from "./soundtrack/test_player.js";

export const metadata = {
    title: "Next Slam",
    author : "이승일 Seungill Lee",
    generator : "Next.js 14",
    description: "Next.js로 제작된 슬램덩크 팬사이트",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                <div id={scss.wrapper}>
                    <header id={scss.header}>
                        <h1><Image src="/images/logo_nextslam.svg" alt="Next Slam" width={355} height={40} /></h1>
                        <GNB />
                    </header>
                    
                    <hr />

                    <main id={scss.contents}>
                        {children}
                    </main>

                    <hr />

                    <footer id={scss.footer}>
                        <p className={scss.copyright}>
                            Copyrightⓒ 2024 <a href="https://seungill-lee.github.io/portfolio/" target="_blank" title="새 창으로 열림">Seungill Lee</a>. All right reserved. <br />
                            Powered by <a href="https://github.com/" target="_blank" title="새 창으로 열림">Github</a> and <a href="https://nextjs.org/blog/next-14" target="_blank" title="새 창으로 열림">Next.js 14</a>.
                        </p>
                    </footer>
                </div>
                <TestPlayer trackNum="0" />
            </body>
        </html>
    );
}
