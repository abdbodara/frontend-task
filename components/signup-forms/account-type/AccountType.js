import styles from './AccountType.module.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Button from "@/components/Button/Button";
import UserInfo from '../UserInfo/UserInfo';
import { useState } from 'react';
const AccountType = ({ step, handleClick }) => {
    return (
        <>
            {
                <div className={`${styles.formLayout}`}>
                    <h2 className={`text-center`} >Choose Account Type</h2>
                    <div className={`container ${styles.checkboxes}  ${styles.wrapper}`}>
                        <div className={`row`}>
                            <div className={`col-6 d-flex justify-content-end`}>
                                <div className={`${styles.leftBox} ${styles.box}`}>
                                    <h3 className="text-center">Standard</h3>
                                    <p className="text-center">For users who want to invest in products</p>
                                    <div className={`${styles.features}`}>
                                        <div className={`${styles.item} d-flex`}>
                                            <BsFillCheckCircleFill className={styles.fillCircle} />
                                            <div className={styles.detail}>Invest in inventory </div>
                                        </div>
                                        <div className={`${styles.item} d-flex`}>
                                            <BsFillCheckCircleFill className={styles.fillCircle} />
                                            <div className={styles.detail}>Collect Payouts </div>
                                        </div>
                                        <div className={`${styles.item} d-flex `}>
                                            <BsFillCheckCircleFill className={styles.fillCircle} />
                                            <div className={styles.detail}>Product Statistics Research </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-6 d-flex justify-content-start`}>
                                <div className={`${styles.leftBox} ${styles.box}`}>
                                    <h3 className="text-center">Standard</h3>
                                    <p className="text-center">For users who want to invest in products</p>
                                    <div className={`${styles.features}`}>
                                        <div className={`${styles.item} d-flex`}>
                                            <BsFillCheckCircleFill className={styles.fillCircle} />
                                            <div className={styles.detail}>Apply for product investment</div>
                                        </div>
                                        <div className={`${styles.item} d-flex`}>
                                            <BsFillCheckCircleFill className={styles.fillCircle} />
                                            <div className={styles.detail}>View product investments statistics</div>
                                        </div>
                                        <div className={`${styles.item} d-flex`}>
                                            <BsFillCheckCircleFill className={styles.fillCircle} />
                                            <div className={styles.detail}>Collect payouts from investments</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button title="Continue" innerBtn={`${styles.innerBtn}`} className={`${styles.btnOrg} `} onClick={() => handleClick(2)} />
                </div>
            }
        </>
    )
}
export default AccountType