import Link from 'next/link';
import Image from 'next/image';
import scss from "./page.module.scss";

export default function Home() {
    return (
        <article id={scss.home}>
            <h2>Welcome to Next Slam.</h2>
            <p className={scss.intro_msg}>
                Next Slam에 방문하신 것을 진심으로 환영합니다. <br />
                이 사이트는 Next.js 14 버전으로 제작되었습니다.
            </p>
            <div className={scss.banner_photo}>
                <Image src="/images/photo_home_visual.jpg" alt="" width={1460} height={1020} />
            </div>
        </article>
    );
}
