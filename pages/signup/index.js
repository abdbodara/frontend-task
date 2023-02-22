import Layout from "@/components/Layout/Layout";
import AccountType from "@/components/signup-forms/account-type/AccountType";
import AddressInfo from "@/components/signup-forms/AddressInfo/Addressinfo";
import BankInfo from "@/components/signup-forms/BankInfo/BankInfo";
import CreatePassword from "@/components/signup-forms/CreatePassword/Createpassword";
import UserInfo from "@/components/signup-forms/UserInfo/UserInfo";
import { useState } from "react";
import styles from "../../styles/Signup.module.css"

const SignUp = () => {
    const [step, setStep] = useState(1);
    const [stepLength, setStepLength] = useState('0%');



    const handleClick = (e) => {
        setStep(e)
        switch (e) {
            case 1:
                return setStepLength("0%");
            case 2:
                return setStepLength("25%");
            case 3:
                return setStepLength("50%");
            case 4:
                return setStepLength("75%");
            case 5:
                return setStepLength("100%");
            default:
                setStepLength("0%")
                break;
        }

    }

    console.log(step);
    return (
        <>
            <Layout>
                <div className={styles.signupWrapper}>
                    <div className={`container ${styles.wrapper}`}>
                        <div className={`${styles.signupForm} d-flex justify-content-center`}>
                            {
                                step === 1 && <AccountType handleClick={handleClick}/>
                            }
                            {
                                step === 2 && <UserInfo handleClick={handleClick} />
                            }
                            {
                                step === 3 && <AddressInfo handleClick={handleClick} />
                            }
                            {
                                step === 4 && <CreatePassword handleClick={handleClick} />
                            }
                            {
                                step === 5 && <BankInfo />
                            }
                        </div>
                        <div className={`container ${styles.stepperWrapper}`}>
                            <div className={styles.stepper}>
                                <div className={styles.stepperBox}>
                                    <div className={`${styles.stepBox}`}>
                                        <div className={`${styles.step} ${step === 1 ? 'activeStep' : step < 1 ? '' : 'completed'}`} onClick={() => handleClick(1)} >1</div>
                                    </div>
                                    <div className={`${styles.stepBox}`}>
                                        <div className={`${styles.step} ${step === 2 ? 'activeStep' : step < 2 ? '' : 'completed'}`} onClick={() => handleClick(2)} >2</div>
                                    </div>
                                    <div className={`${styles.stepBox}`}>
                                        <div className={`${styles.step} ${step === 3 ? 'activeStep' : step < 3 ? '' : 'completed'}`} onClick={() => handleClick(3)}>3</div>
                                    </div>
                                    <div className={`${styles.stepBox}`}>
                                        <div className={`${styles.step} ${step === 4 ? 'activeStep' : step < 4 ? '' : 'completed'}`} onClick={() => handleClick(4)} >4</div>
                                    </div>
                                    <div className={`${styles.stepBox}`}>
                                        <div className={`${styles.step} ${step === 5 ? 'activeStep' : step < 5 ? '' : 'completed'}`} onClick={() => handleClick(5)}>5</div>
                                    </div>
                                    <div className={`${styles.stepLine}`} style={{ width: stepLength }}></div>
                                </div>
                            </div>
                            <div className={styles.stepData}>
                                <p className={styles.stepTitle}>Account type </p>
                                <p className={styles.stepTitle}>Your Information</p>
                                <p className={styles.stepTitle}>More information</p>
                                <p className={styles.stepTitle}>Your password</p>
                                <p className={styles.stepTitle}>Bank (optional)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default SignUp