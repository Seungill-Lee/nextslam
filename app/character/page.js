import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";

export const metadata = {
  title: "등장인물 | Next Slam",
};

export default function Character() {
    return (
        <article id={scss.team}>
            <h2>등장인물</h2>
            <ul className={scss.tm_list}>
                <li>
                    <Link href="./shohoku">
                        <figure>
                            <Image src="/images/team/photo_sdt_shohoku.jpg" alt="상북" className="tm_photo" width={378} height={560} />
                            <figcaption></figcaption>
                        </figure>
                    </Link>
                </li>
                <li>
                    <Link href="./ryonan">
                        <figure>
                            <Image src="/images/team/photo_sdt_ryonan.jpg" alt="능남" className="tm_photo" width={403} height={596} />
                            <figcaption></figcaption>
                        </figure>
                    </Link>
                </li>
                <li>
                    <Link href="./shoyo">
                        <figure>
                            <Image src="/images/team/photo_sdt_shoyo.jpg" alt="상양" className="tm_photo" width={403} height={596} />
                            <figcaption></figcaption>
                        </figure>
                    </Link>
                </li>
                <li>
                    <Link href="./kainan">
                        <figure>
                            <Image src="/images/team/photo_sdt_kainan.jpg" alt="해남" className="tm_photo" width={401} height={593} />
                            <figcaption></figcaption>
                        </figure>
                    </Link>
                </li>
            </ul>
        </article>
    );
}
