import Button from '@/components/Button/Button'
import FieldForm from '@/components/Card-Form/Card'
import Input from '@/components/InputField/Input'
import FormLayout from '@/components/Page-Layout/CardLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/Login.module.css'
const ForgotPage = () => {
    const router = useRouter()
    return (
        <>
            <FormLayout page="forgot_page">
                <FieldForm
                    title="Forgot your password?"
                    subTitle="Enter the e-mail address associated 
                    with your account"
                >
                    <>
                        <Input type="text" placeholder="Email Address" className="mb-0" />
                        <Button title="Confirm" innerBtn={styles.innerBtn} className={`${styles.loginButton} ${styles.confirmBtn}`} onClick={()=> router.push('/login/forgot_password/verification')} />
                        <div className={`mt-3 text-center ${styles.bottomLinkWrapper}`}>
                            <Link href={'/login'} >Back to login</Link>
                        </div>
                    </>
                </FieldForm>
            </FormLayout>
        </>
    )
}
export default ForgotPage