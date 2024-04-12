import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";

export const metadata = {
  title: "등장인물 | Next Slam",
};

export default function Character() {
    return (
        <article id={scss.character}>
            <h2>등장인물</h2>
            <ul className={scss.team_member}>
                <li>
                    <Link href="./shohoku"><Image src="/images/team/photo_sdt_shohoku.jpg" alt="상북" className="tm_photo" width={378} height={560} /></Link>
                </li>
                <li>
                    <Link href="./ryonan"><Image src="/images/team/photo_sdt_ryonan.jpg" alt="능남" className="tm_photo" width={403} height={596} /></Link>
                </li>
                <li>
                    <Link href="./shoyo"><Image src="/images/team/photo_sdt_shoyo.jpg" alt="상양" className="tm_photo" width={403} height={596} /></Link>
                </li>
                <li>
                    <Link href="./kainan"><Image src="/images/team/photo_sdt_kainan.jpg" alt="해남" className="tm_photo" width={401} height={593} /></Link>
                </li>
            </ul>
        </article>
    );
}
