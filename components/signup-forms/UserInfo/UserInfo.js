import styles from './UserInfo.module.css'
import { MdLock } from 'react-icons/md'
import Input from '@/components/InputField/Input';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import AddressInfo from '../AddressInfo/Addressinfo';
const UserInfo = ({ handleClick }) => {
    return (
        <>
            {
                <div className={`${styles.formLayout} d-flex flex-column align-items-center justify-content-between`}>
                    <div className="form">
                        <h2 className={`text-center mt-3`} >Enter your Information</h2>
                        <div className={styles.privacyMsgBox}>
                            <MdLock className={styles.lockIcon} />
                            <p>Your data is safe with SalesStrike! In no case will it be shared. </p>
                        </div>
                        <div className={styles.fieldWrapper}>
                            <Input type="text" placeholder="First Name" />
                            <Input type="text" placeholder="Last Name" />
                            <Input type="email" placeholder="E-mail Address" />
                        </div>
                        <div className={styles.checkboxWrapper}>
                            <input type="checkbox" class="mb-0" />
                            <span>Remember me</span>
                        </div>
                    </div>
                    <div className={`${styles.submitButton} w-100`}>
                        <Button title='Continue' innerBtn={styles.innerBtn} className={styles.btnblock} onClick={() => handleClick(3)} />
                    </div>
                </div>
            }

        </>
    );
}
export default UserInfo