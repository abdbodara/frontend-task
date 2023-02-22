import styles from './Footer.module.css'
import navLogo from "../../public/images/lightLogo.svg"
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.innerLeft}>
                    <div className={`${styles.logoWrapper} d-flex align-items-center`}>
                        <Image src={navLogo} className={styles.navLogo} alt="footer-logo" />
                        <h3 className='text-light'>adsc@youradsc.com</h3>
                    </div>
                </div>
                <div className={styles.innerRight}>
                    <div className={`${styles.linkWrapper}`}>
                        <div>
                            <Link href='#' className='clr-org'>Privacy Policy</Link>
                            <Link href='#' className='clr-org'>Cookie Policy</Link>
                            <Link href='#' className='clr-org'>Terms & Conditions</Link>
                        </div>

                        <div>
                            <Link href='#' className='text-light'>SalesStrike © All rights reserved.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer