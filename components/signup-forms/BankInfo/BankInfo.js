import Button from '@/components/Button/Button';
import Input from '@/components/InputField/Input';
import { MdLock } from 'react-icons/md';
import styles from '../UserInfo/UserInfo.module.css'
const BankInfo = () => {
    return (
        <>
            <div className={`${styles.formLayout} d-flex flex-column align-items-center justify-content-between`}>
                <div className="form">
                    <h2 className={`text-center mt-3`} >Enter Bank Information</h2>
                    <div className={styles.privacyMsgBox}>
                        <MdLock className={styles.lockIcon} />
                        <p>Your data is safe with SalesStrike! In no case will it be shared. </p>
                    </div>
                    <div className={styles.fieldWrapper}>
                        <Input type="text" placeholder="Bank Holder Name" />
                        <Input type="text" placeholder="Account Number" />
                        <Input type="text" placeholder="Routing Number" />
                    </div>
                </div>
                <div className={`${styles.submitButton} w-100`}>
                    <Button title='Skip' innerBtn={styles.innerBtn} className={styles.btnblock} />
                </div>
            </div>
        </>
    );
}
export default BankInfo
