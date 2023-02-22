import styles from './DashboardTabs.module.css'
import userImg from '../../../public/images/user.png'
import Button from "@/components/Button/Button";
import Link from "next/link";
import { MdOutlineDashboard, MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiBarChartFill } from "react-icons/ri";
import { RiBankLine } from "react-icons/ri";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbFileDollar } from "react-icons/tb"
import Image from 'next/image';
const DashboardTabs = () => {
    return (
        <>
            <div className={`col-12 col-sm-4 ${styles.leftSide}`}>
                <div className={styles.tabWrapper}>
                    <div className={styles.userProfile}>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className={styles.userLogo}>
                                <Image src={userImg} alt='userImg' />
                            </div>
                            <div className={styles.userContent}>
                                <h4>Username</h4>
                                <Button title='Account Settings' className={styles.btnLight} innerBtn={styles.innerBtn} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.linksWrapper}>
                        <div className={styles.buttonLink}>
                            <Link href="#" className={`${styles.link} w-100 active-tab`}>
                                <span><MdOutlineDashboard className={styles.linkIcon} /> Dashboard</span>
                            </Link>
                        </div>
                        <div className={styles.buttonLink}>
                            <Link href="#" className={`${styles.link} w-100`}>
                                <span><RiBarChartFill className={styles.linkIcon} /> Statistics</span>
                            </Link>
                        </div>
                        <div className={styles.buttonLink}>
                            <Link href="#" className={`${styles.link} w-100`}>
                                <span><TbFileDollar className={styles.linkIcon} /> Sales</span>
                            </Link>
                        </div>
                        <div className={styles.buttonLink}>
                            <Link href="#" className={`${styles.link} w-100`}>
                                <span><RiExchangeDollarFill className={styles.linkIcon}/> Withdrawal</span>
                            </Link>
                        </div>
                        <div className={styles.buttonLink}>
                            <Link href="#" className={`${styles.link} w-100`}>
                                <span><AiOutlineDollarCircle className={styles.linkIcon} /> Cashflow</span>
                            </Link>
                        </div>
                        <div className={styles.buttonLink}>
                            <Link href="#" className={`${styles.link} w-100`}>
                                <span><MdOutlineInventory2 className={styles.linkIcon} />Inventory</span>
                            </Link>
                        </div>
                        <div className={styles.buttonLink}>
                            <Link href="#" className={`${styles.link} w-100`}>
                                <span><RiBankLine className={styles.linkIcon} /> Bank Details</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashboardTabs