import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import Divider from "components/sections/divider";
import SocialMedia from "components/sections/social.media";
import GlowCard from "components/share/glow-card";
import { APP_DATA } from "helpers/data";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
    const {t} = useTranslation()
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">{t('about.title')} <span className="brand-red">{t('about.prefix')}</span> </h3>
                    <div>
                        <div>
                            <p>{t('about.greeting')}</p>

                            <p>{t('about.employment')}</p>

                            <p>{t('about.education')}</p>
                        </div>
                    </div>
                    <div>
                        <p>{t('about.hobbies_title')}</p>
                        <ul>
                            <li>{t('about.hobby_playing_games')}</li>
                            <li>{t('about.hobby_writing_blogs')}</li>
                            <li>{t('about.hobby_travelling')}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">{t('about.quote')}</p>
                        <p className="text-center brand-red">{t('about.quote_author')}</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{t('education.title')}</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2018-2023</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">
                                                    {t('education.major')}
                                                </p>
                                                <p className="company"> {t('education.university')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        youtube={APP_DATA.YOUTUBE_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        tiktok={APP_DATA.TIKTOK_URL}
                        udemy={APP_DATA.UDEMY_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;