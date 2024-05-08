import Link from 'next/link';
import Image from 'next/image';
import scss from './notFound.module.scss'

export default function NotFound() {
    return (
        <div className={scss.not_found}>
            <div className={scss.msg}>
                <h2><Image src="/images/ico_not_found.png" width={328} height={424} alt="Not Found" /></h2>
                <p>요청하신 페이지를 찾을 수 없습니다.</p>
            </div>
        </div>
    );
}
