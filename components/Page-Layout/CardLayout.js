import Image from 'next/image';
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import styles from './CardLayout.module.css'
import logo from '../../public/icons/largeLogo.svg'
import laptopImg from '../../public/images/laptop.svg'
import shield from '../../public/images/Shield.svg'
import keyImg from '../../public/images/Key.svg'
import verification from '../../public/icons/verified-person.svg'
import Footer from '../Footer/Footer';
import ImgLayout from './ImgLayout';
import Layout from '../Layout/Layout';


const FormLayout = ({ children, page }) => {
    return (
        <>
            <Layout>
                <div className={`container ${styles.cardLayout}`}>
                    <div className="row">
                        <div className="col-12 order-2 order-md-1 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                            {children}
                        </div>
                        <div className="col-12 order-1 order-md-2 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                            {
                                page === 'login' &&
                                <ImgLayout>
                                    <Image src={logo} className={styles.logo} alt="logo" />
                                    <h2>Not yet registered?</h2>
                                    <Button title='Get Started!' innerBtn={styles.innerBtn} className={styles.registerBtn} />
                                </ImgLayout>
                            }
                            {
                                page === 'forgot_page' &&
                                <ImgLayout>
                                    <Image src={laptopImg} className={`${styles.logo} ${styles.laptopImg}`} alt="laptopImg" />
                                </ImgLayout>
                            }
                            {
                                page === 'forgot_verification' &&
                                <ImgLayout>
                                    <Image src={verification} className={`${styles.logo} ${styles.forgotVerificationImg}`} alt="verification" />
                                    <div className={styles.loadingCirclebox}>
                                        <div className={styles.loadingCircle}></div>
                                    </div>
                                </ImgLayout>
                            }
                            {
                                page === 'create_password' &&
                                <ImgLayout>
                                    <div className={`d-flex ${styles.imgContainer} justify-content-center`}>
                                        <Image src={shield} className={`${styles.logo} ${styles.shield}`} alt="shield" />
                                        <Image src={keyImg} className={`${styles.logo} ${styles.keyImg}`} alt="keyImg" />
                                    </div>
                                </ImgLayout>
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default FormLayout