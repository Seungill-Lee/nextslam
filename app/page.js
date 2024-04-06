import Image from "next/image";
import style from "./page.module.css";

export default function Home() {
  return (
    <article id="home" className="content_inner">
        <h2>Welcome to Next Slam.</h2>
        <div className="banner_photo">
          
        </div>
        <p className="intro_msg">
            Next Slam에 방문하신 것을 진심으로 환영합니다. <br />
            이 사이트는 Next.js 14 버전으로 제작되었습니다.
        </p>
    </article>
  );
}
