import Button from '@/components/Button/Button';
import Input from '@/components/InputField/Input';
import { useState } from 'react';
import { MdLock } from 'react-icons/md';
import CreatePassword from '../CreatePassword/Createpassword';
import styles from '../UserInfo/UserInfo.module.css'
const AddressInfo = ({ handleClick }) => {

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
                            <Input type="text" placeholder="Phone Number" />
                            <textarea placeholder="Type your message" class={styles.commentBox} spellcheck="false"></textarea>
                        </div>
                    </div>
                    <div className={`${styles.submitButton} w-100`}>
                        <Button title='Continue' innerBtn={styles.innerBtn} className={styles.btnblock} onClick={() => handleClick(4)} />
                    </div>
                </div>
            }
        </>
    );
}
export default AddressInfo
