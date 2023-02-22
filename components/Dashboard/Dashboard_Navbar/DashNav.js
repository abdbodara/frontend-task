import Image from 'next/image';
import Link from 'next/link';
import styles from './DashNav.module.css'
import navLogo from "../../../public/icons/logo.svg"
import Input from '../../InputField/Input';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
const DashNav = () => {
    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.navWrapper}>
                    <div className={`${styles.navLogoWrapper} d-flex align-items-center`}>
                        <Image src={navLogo} alt="logo-img" className={styles.navLogo} />
                        <h3 className={styles.navTitle}><Link href='/'>SalesStrike</Link></h3>
                    </div>
                    <div className={styles.navLinks}>
                        <Input
                            type='text'
                            placeholder="Search"
                            className={styles.inputField}
                            radius="radius"
                            styleIcon={styles.fieldWrapper}
                            Icon1={<AiOutlineSearch className={styles.searchIcon} />}
                        />
                    </div>
                    <div className={styles.navRight}>
                        <AiOutlineShoppingCart className={styles.cartIcon} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashNav