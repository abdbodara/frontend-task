import Dashboard_Layout from "@/components/Dashboard/Dashbord_Layout/DashbordLayout";
import styles from '../../styles/Dashboard.module.css'
import DashboardTabs from "@/components/Dashboard/Tabs/DashboardTabs";
import { IoMdSettings } from 'react-icons/io'
import Button from "@/components/Button/Button";
import tableImg1 from "../../public/images/product1.svg"
import tableImg2 from "../../public/images/headphone.svg"
import tableImg3 from "../../public/images/shoes.svg"
import Image from "next/image";

const Dashboard_Home = () => {
    return (
        <>
            <Dashboard_Layout>
                <div className={`container-lg ${styles.wrapper}`}>
                    <div className="row justify-content-evenly">
                        <DashboardTabs />
                        <div className={`col-12 col-sm-8 ${styles.rightSide}`}>
                            <div className={`${styles.statics} container`}>
                                <div className={`${styles.staticsInner} row`}>
                                    <div className={`${styles.innerBox} col-6 col-sm-6 col-md-3`}>
                                        <div className={`${styles.data}`}>$124</div>
                                        <div className={`${styles.desc}`}>All time return</div>
                                    </div>
                                    <div className={`${styles.innerBox} col-6 col-sm-6 col-md-3`}>
                                        <div className={`${styles.data}`}>$543</div>
                                        <div className={`${styles.desc}`}>All time Cost</div>
                                    </div>
                                    <div className={`${styles.innerBox} col-6 col-sm-6 col-md-3`}>
                                        <div className={`${styles.data}`}>20%</div>
                                        <div className={`${styles.desc}`}>Product Turnover</div>
                                    </div>
                                    <div className={`${styles.innerBox} col-6 col-sm-6 col-md-3`}>
                                        <div className={`${styles.data}`}>00/00</div>
                                        <div className={`${styles.desc}`}>Cost / Days Saved</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.bankDetail}`}>
                                <div className={`${styles.innerBankData} row`}>
                                    <div className={`col-12 col-md-5 ${styles.accountInfo}`}>
                                        <div className="d-flex align-items-center mb-2">
                                            <h4 className="mb-0 me-1">Bank Management</h4>
                                            <div className={styles.setting}><IoMdSettings className={styles.settingIcon} /></div>
                                        </div>
                                        <p className="mb-1">Routing Number: <span>21746382791</span></p>
                                        <p>Account Number: <span>214070640-3745832</span></p>
                                    </div>
                                    <div className={`col-12 col-md-7 ${styles.balanceInfo}`}>
                                        <div className={styles.amountInfoWrapper}>
                                            <p>Balance:</p>
                                            <div className={`${styles.amountInfo}`}>
                                                <h2>342$</h2>
                                                <Button title="Withdraw Funds" innerBtn={styles.innerBtn} className={styles.btnBox} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.turnoverInfo}`}>
                                <h2>Time to turnover</h2>
                                <div className="table-responsive-lg">
                                    <table class="table">
                                        <thead>
                                            <tr className={styles.tableHeading}>
                                                <th scope="col"><input type='checkbox' /></th>
                                                <th scope="col">Product</th>
                                                <th scope="col" className="text-center">Remaining</th>
                                            </tr>
                                        </thead>
                                        <tbody className={styles.tableBody}>
                                            <tr>
                                                <th scope="row"><input type='checkbox' /></th>
                                                <td className={styles.productName}>
                                                    <span><Image src={tableImg1} className={styles.tableImg} alt='tableImg1' /></span>
                                                    <span>Push-Up Board</span>
                                                </td>
                                                <td className="text-center">12</td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><input type='checkbox' /></th>
                                                <td className={styles.productName}>
                                                    <span><Image src={tableImg2} className={styles.tableImg} alt='tableImg1' /></span>
                                                    <span>Headphones</span>
                                                </td>
                                                <td className="text-center">7</td>
                                            </tr>
                                            <tr style={{ borderColor: '#fff' }}>
                                                <th scope="row"><input type='checkbox' /></th>
                                                <td className={styles.productName}>
                                                    <span><Image src={tableImg3} className={styles.tableImg} alt='tableImg1' /></span>
                                                    <span>Sneakers</span>
                                                </td>
                                                <td className="text-center">53</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard_Layout>
        </>
    );
};
export default Dashboard_Home