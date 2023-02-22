import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';
import call from '../public/icons/call.svg'
import mail from '../public/icons/mail.svg'
import Input from '@/components/InputField/Input';
const Contact = () => {
    return (
        <>
            <main>
                <Navbar />
                <div className={`${styles.contactWrapper} contactMain`}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-12 col-xl-3 col-md-4 ${styles.aboutLeft}`}>
                                <div className={`${styles.aboutLeftInner}`}>
                                    <h4>Schedule a <br /> consultation for free!</h4>
                                    <div className={`${styles.calendly}`}></div>
                                </div>
                            </div>
                            <div className={`${styles.aboutForm}  col-12 col-xl-9 col-md-8 `}>
                                <div className={`${styles.formWrapper} container`}>
                                    <h2>Let’s Chat!</h2>
                                    <div className={`${styles.fieldContainer} container`}>
                                        <div className={`row ${styles.formInner}`}>
                                            <div className={`col-12 col-md-6 d-flex flex-column justify-content-between ${styles.fieldset}`}>
                                                <Input type="text" placeholder="First Name"  />
                                                <Input type="text" placeholder="Last Name"  />
                                                <Input type="text" placeholder="Email Address"  />
                                            </div>
                                            <div className={`col-12 col-md-6 ${styles.fieldset}`}>
                                                <div className={`ms-3 d-flex flex-column justify-content-between ${styles.fieldRigntWrapper}`}>
                                                    <textarea placeholder='Type your message' className={styles.commentBox} />
                                                    <Button title="Submit" innerBtn={styles.innerBtn} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.formBottom} d-flex`}>
                                    <h4>Or</h4>
                                    <div className="flex flex-column">
                                        <div className={`${styles.contactDetails} d-flex`}>
                                            <Image src={call} alt="phone"/>
                                            <p>954-895-8246</p>
                                        </div>
                                        <div className={`${styles.contactDetails} d-flex`}>
                                            <Image src={mail} alt="mail"/>
                                            <p>adsc@youradsc.com</p>
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
export default Contact