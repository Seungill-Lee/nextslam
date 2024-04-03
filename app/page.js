import Image from "next/image";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
        <h1 className={style.test}>홈</h1>
        <p>홈 입니다.</p>
    </>
  );
}
