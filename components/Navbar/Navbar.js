import styles from "./Navbar.module.css";
import navLogo from "../../public/icons/logo.svg"
import mobLogo from "../../public/images/logoLight.svg"

import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = () => {
    const router = useRouter()
    return (
        <>
            <div className={`${styles.navContainer}`}>
                <div className={styles.navWrapper}>
                    <div className={`${styles.navLogoWrapper} d-flex align-items-center`}>
                        <Image src={navLogo} alt="logo-img" className={styles.navLogo} />
                        <h3 className={styles.navTitle}><Link href='/'>SalesStrike</Link></h3>
                    </div>
                    <div className={styles.navLinks}>
                        <ul>
                            <li><Link href='/about'> about us</Link></li>
                            <li><Link href='/'>products</Link></li>
                            <li><Link href='/contact'>contact us</Link></li>
                        </ul>
                        <div className={styles.navRight}>
                            <Button title="Log In" onClick={() => router.push('/login')} />
                            <i className={`bi bi-list ${styles.icon}`} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`offcanvas offcanvas-end ${styles.offcanvas}`}
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
                data-bs-scroll="true"
            >
                <div className="offcanvas-header">
                    <div className={`${styles.navLogoWrapper} ${styles.mobLogoWrapper} d-flex align-items-center`}>
                        <Image src={mobLogo} alt="mob-logo-img" className={`${styles.navLogo} ${styles.mobLogo}`}  onClick={() => router.push('/login')}/>
                        <h3 className={`${styles.navTitle} ${styles.mobTitle}`}><Link href='/'>SalesStrike</Link></h3>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-between">
                    <div className={`${styles.mobLinks}`}>
                        <h2><Link href='/about'>About Us</Link> </h2>
                        <h2><Link href='#'>Products</Link> </h2>
                        <h2><Link href='/contact'>Contact Us</Link> </h2>
                    </div>
                    <div className={`ButtonWrapper ${styles.mobBtn}`}>
                        <Button title="Log In" innerBtn={styles.innerBtn} onClick={() => router.push('/login')} />
                    </div>
                    <div className={`${styles.footerWrapper} mt-5`}>
                        <p>SalesStrike © All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;