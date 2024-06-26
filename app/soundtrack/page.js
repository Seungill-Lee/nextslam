import StList from "/components/soundtrack/stList.js";
import scss from "./page.module.scss";

export const metadata = {
    title: "사운드트랙(Soundtrack)",
    description: "슬램덩크 수록곡 모음(List of songs from Slamdunk)",
    openGraph: {
        title: "사운드트랙(Soundtrack)",
        description: "슬램덩크 수록곡 모음(List of songs from Slamdunk)",
        url: process.env.SITE_URL+"/soundtrack",
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

export default function Developer() {
    return (
        <>
            <h2>사운드트랙</h2>
            <p className={scss.guide}>
                유튜브 앱(사이트)에 대한 <a href="https://support.google.com/chrome/answer/95647?hl=ko&co=GENIE.Platform%3DDesktop" target="_blank" title="새 창 열림">Third-Party Cookie</a>가 허용되지 않았을 경우 일부 음악이 재생되지 않습니다.
            </p>
            <StList />
        </>
    );
}
