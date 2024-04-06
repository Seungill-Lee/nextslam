import { Inter } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    author : "이승일 Seungill Lee",
    generator : "Next.js 14",
    description: "Next.js로 제작된 슬램덩크 팬사이트",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <header id="header">
                    <h1><Image src="/images/logo_nextslam.svg" alt="Next Slam" width={355} height={40} /></h1>
                    <nav id="gnb">
                        <ul>
                            <li><Link href="./">Home</Link></li>
                            <li><Link href="/overview">Overview</Link></li>
                            <li><Link href="/character">Character</Link></li>
                            <li><Link href="/developer">Developer</Link></li>
                            <li><Link href="/guestbook">Guestbook</Link></li>
                        </ul>
                    </nav>
                </header>
                
                <hr />

                <main id="contents">
                    {children}
                </main>

                <hr />

                <footer id="footer">
                    <p className="copyright">
                        Copyrightⓒ 2024 Seungill Lee. All right reserved. <br />
                        Powered by <a href="https://github.com/" target="_blank" title="새 창으로 열림">Github</a> and <a href="https://nextjs.org/blog/next-14" target="_blank" title="새 창으로 열림">Next.js 14</a>.
                    </p>
                </footer>
            </body>
        </html>
    );
}
