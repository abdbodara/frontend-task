import styles from './Createpassword.module.css'
import { MdLock } from 'react-icons/md'
import { GrDocumentLocked } from 'react-icons/gr'
import Input from '@/components/InputField/Input';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import BankInfo from '../BankInfo/BankInfo';

const CreatePassword = ({ handleClick }) => {
    return (
        <>
            {
                <div className={`${styles.formLayout} d-flex flex-column align-items-center justify-content-between`}>
                    <div className={`form ${styles.passwordWrapper}`}>
                        <h2 className={`text-center mt-3`} >Create your Password</h2>
                        <div className="container">
                            <div className="row justify-content-center mb-4">
                                <div className={`${styles.side} col-12 col-md-6 col-lg-5 col-xl-4`}>
                                    <div className={styles.privacyMsgBox}>
                                        <MdLock className={styles.lockIcon} />
                                        <p>Your data is safe with SalesStrike! In no case will it be shared. </p>
                                    </div>
                                    <div className={styles.fieldWrapper}>
                                        <Input type="password" placeholder="Create Password" />
                                        <Input type="password" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className={`${styles.side} col-12 col-md-6 col-lg-5 col-xl-4`}>
                                    <div className={styles.privacyMsgBox}>
                                        <GrDocumentLocked className={styles.lockIcon} />
                                        <p>Make sure to read the contracts as they are legally binding. </p>
                                    </div>

                                    <div className={styles.checkboxWrapper}>
                                        <input type="checkbox" class="mb-0" />
                                        <span>User Agreement</span>
                                    </div>
                                    <div className={styles.checkboxWrapper}>
                                        <input type="checkbox" class="mb-0" />
                                        <span>Protection Against Loss</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.submitButton} w-100`}>
                        <Button title='Continue' innerBtn={styles.innerBtn} className={styles.btnblock} onClick={() => handleClick(5)} />
                    </div>
                </div>
            }

        </>
    );
}
export default CreatePassword