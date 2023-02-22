import Button from '@/components/Button/Button';
import Input from '@/components/InputField/Input';
import styles from '../../styles/Login.module.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import FieldForm from '@/components/Card-Form/Card';
import FormLayout from '@/components/Page-Layout/CardLayout';
import { useRouter } from 'next/router';
const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value)
    }

    const router = useRouter()
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <>
            <FormLayout page="login">
                <FieldForm title="Welcome Back!">
                    <>
                        <div className={styles.inputFieldWrapper}>
                            <Input type="text" placeholder="Email Address" />
                            <Input
                                type={passwordType}
                                placeholder="Enter Password"
                                className={styles.editField}
                                styleIcon={styles.fieldWrapper}
                                Icon1={<AiOutlineEye />}
                                Icon2={<AiOutlineEyeInvisible />}
                                onChange={handlePasswordChange}
                                changeIcon={togglePassword}
                            />
                        </div>
                        <div className={styles.forgotPassword}>
                            <div className={styles.checkboxWrapper}>
                                <input type="checkbox" className='mb-0' />
                                <span>Remember me</span>
                            </div>
                            <div className={styles.forgotLink} onClick={() => router.push('/login/forgot_password')} >Forgot Password?</div>
                        </div>
                        <Button title="Login" innerBtn={`${styles.innerBtn}`} className={styles.loginButton} />
                    </>
                </FieldForm>
            </FormLayout>
        </>
    )
}
export default Login