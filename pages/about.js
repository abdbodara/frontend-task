import Image from "next/image";
import styles from "../styles/About.module.css"
import webpic1 from "../public/images/jpgpic.png"
import webpic2 from "../public/images/jpgpic2.png"
import webpic3 from "../public/images/gtLogo.svg"
import linkedIn from "../public/icons/linkedin.svg"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const About = () => {
    return (
        <>
            <main>
                <Navbar />
                <div className={`${styles.aboutWrapper}`} >
                    <div className={`${styles.aboutHeader}`}>
                        <h1 className="text-capitalize text-center text-bold">about us</h1>
                    </div>
                    <div className={`${styles.aboutMain1} container`}>
                        <div className="row">
                            <div className="col-12 col-md-4 text-align-center">
                                <div className="d-flex justify-content-start">
                                    <Image src={webpic1} alt="webpic1" className={styles.webpic} />
                                    <h2 className={`${styles.mobTitle} clr-org ms-2 mt-2`}><span className="text-bold ">JayaSai Somasundaram</span> - Co-Founder</h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className={`${styles.aboutContent}`}>
                                    <h2 className={`${styles.deskTitle} clr-org mb-4`}><span className="text-bold ">JayaSai Somasundaram</span> - Co-Founder</h2>
                                    <p className={`${styles.makersays} mb-4`}>
                                        &rsquo;&lsquo;I am a third year student at Georgia Tech in Computer Science. My goal is to work with industry leaders in technology, learn, grow and eventually be part of a successful company and projects far bigger than myself. I have previously worked on research with Machine Learning and am currently working as a Network Engineer as well as the founder of this company. Beyond this I also actively trade daily in the US Stock Market and work on multiple projects related to the equities market as well as help lead GT&apos;s Trading Organization. I am certified as a Cloud Practitioner by AWS as well as CMT  Level I certified in financial market analysis.&rsquo;&lsquo;
                                    </p>
                                    <div className={`${styles.endContent} pt-2`}>
                                        <Image src={linkedIn} className={styles.iconImg} alt="linkedIn1" />
                                        <span className={`${styles.iconText} ms-3`}>Linkedin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.aboutMain2} container mt-5`}>
                        <div className="row">
                            <div className="col-12 col-md-4 order-md-2 d-flex justify-content-end">
                                {/* <div className="d-flex justify-content-start"> */}
                                <Image src={webpic2} alt="webpic2" className={styles.webpic} />
                                <h2 className={`${styles.mobTitle} clr-org ms-2 mt-2`}><span className="text-bold ">VijayaSai Somasundaram</span> - Co-Founder</h2>
                                {/* </div> */}
                            </div>
                            <div className="col-12 col-md-8 order-md-1 d-flex flex-column justify-content-end">
                                <div className={`${styles.aboutContent} text-end`}>
                                    <h2 className={`${styles.deskTitle} clr-org mb-4`}><span className="text-bold ">VijayaSai Somasundaram</span> - Co-Founder</h2>
                                    <p className={`${styles.makersays} mb-4`}>
                                        &rsquo;&lsquo;I am a sophomore Computer Science major at the University of Florida. I am passionate about cloud technology and Amazon Web Services. I have extensive experience in developing backend infrastructure through AWS CDK and AWS SDK. I&apos;m excited for the next great experience&rsquo;&lsquo;
                                    </p>
                                    <div className={`${styles.endContent} pt-2`}>
                                        <Image src={linkedIn} className={styles.iconImg} alt="linkedImg" />
                                        <span className={`${styles.iconText} ms-3`}>Linkedin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.aboutFooterContent} d-flex flex-column align-items-center justify-content-center mt-5`}>
                        <div className={`${styles.aboutMain3} container`}>
                            <div className="row">
                                <div className="col-12 col-md-4 d-flex justify-content-start  align-items-center">
                                    <Image src={webpic3} alt="webpic1" className={styles.webpic} />
                                    <h2 className={`${styles.mobTitle} clr-org mb-4 text-bold`}>Funded By Create-X</h2>
                                </div>
                                <div className="col-12 col-md-8">
                                    <div className={`${styles.aboutContent}`}>
                                        <h2 className={`${styles.deskTitle} clr-org mb-4 text-bold`}>Funded By Create-X</h2>
                                        <p className={`${styles.makersays} mb-4`}>
                                            &rsquo;&lsquo;CREATE-X is a Georgia Tech initiative to instill entrepreneurial confidence in students and empower them to launch successful startups. The broader goal of this initiative is to provide the knowledge, skills, abilities, and experiences that will give Georgia Tech graduates the confidence to create their own future and confidently pursue entrepreneurial opportunities.&rsquo;&lsquo;
                                        </p>
                                        <div className={`${styles.endContent} pt-2`}>
                                            <Image src={linkedIn} className={styles.iconImg} alt='linkedIn1' />
                                            <span className={`${styles.iconText} ms-3`}>Linkedin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
export default About