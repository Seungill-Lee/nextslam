import Link from 'next/link';
import Image from "next/image";
import scss from "./page.module.scss";
import data from '/components/team/data.json';

export function generateMetadata({params},parent) {
    // read route params
    const teamId = data.team.find(x => x.id == params.id).id
    const orgTemaName = data.team.find(x => x.id == params.id).orgName;
    const korTemaName = data.team.find(x => x.id == params.id).korName;
   
    return {
        title: 
            orgTemaName == "Kainan" ?
                `${korTemaName}대부속고(Team ${orgTemaName})` : 
                `${korTemaName}(Team ${orgTemaName})`,
            description: "고교 내 주요 등장인물 소개(Introducing the main characters in the team)",
        openGraph: {
            title: 
                orgTemaName == "Kainan" ?
                    `${korTemaName}대부속고(Team ${orgTemaName})` : 
                    `${korTemaName}(Team ${orgTemaName})`,
            description: "고교 내 주요 등장인물 소개(Introducing the main characters in the team)",
            url: process.env.SITE_URL+"/team/"+teamId,
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
    }
}

export default function Character(props) {
    return (
        <ul className={scss.charater_list}>
            {
                data[props.params.id].map((a, i) => {
                    return (
                        <li key={i}>
                            <div className={scss.photo}>
                                <Image src={"/images/character/photo_sdc_"+a.id+".jpg"} alt={a.korName} width={638} height={360} />
                            </div>
                            <dl className={scss.info}>
                                <>
                                    <dt>이름</dt>
                                    <dd>{a.korName} [{a.orgName}]</dd>
                                </>
                                {a.grade != null ? 
                                    <>
                                        <dt>학년</dt>
                                        <dd>{a.grade}</dd>
                                    </> : <></>
                                }
                                {a.tall != null ? 
                                    <>
                                        <dt>신장</dt>
                                        <dd>{a.tall}</dd>
                                    </> : <></>
                                }
                                {a.weight != null ? 
                                    <>
                                        <dt>체중</dt>
                                        <dd>{a.weight}</dd>
                                    </> : <></>
                                }
                                {a.position != null ? 
                                    <>
                                        <dt>포지션</dt>
                                        <dd>{a.position}</dd>
                                    </> : <></>
                                }
                                {a.backNumber != null ? 
                                    <>
                                        <dt>등번호</dt>
                                        <dd>{a.backNumber}</dd>
                                    </> : <></>
                                }
                                {a.nickname != null ? 
                                    <>
                                        <dt>별명</dt>
                                        <dd>{a.nickname}</dd>
                                    </> : <></>
                                }
                                {a.motive != null ? 
                                    <>
                                        <dt>NBA모델</dt>
                                        <dd>{a.motive}</dd>
                                    </> : <></>
                                }
                                {a.intro != null ? 
                                    <>
                                        <dt>소개</dt>
                                        <dd dangerouslySetInnerHTML={{__html: a.intro}} />
                                    </> : <></>
                                }
                            </dl>
                        </li>
                    )
                })
            }
        </ul>
    )
}