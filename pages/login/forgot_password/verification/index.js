import Button from '@/components/Button/Button'
import FieldForm from '@/components/Card-Form/Card'
import Input from '@/components/InputField/Input'
import FormLayout from '@/components/Page-Layout/CardLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../../styles/Login.module.css'
const Verification = () => {
    const router = useRouter();
    return (
        <>
            <FormLayout page="forgot_verification">
                <FieldForm
                    title="Verification"
                    subTitle="Enter the code recieved in your e-mail"
                >
                    <>
                        <Input type="text" placeholder="Verification Code" className="mb-0" />
                        <Button title="Confirm" innerBtn={styles.innerBtn} className={`${styles.loginButton} ${styles.confirmBtn}`} onClick={()=> router.push('/login/forgot_password/verification/create_password')} />
                        <div className={`mt-3 text-center ${styles.bottomLinkWrapper}`}>
                        Didn’t get a code? <Link href={'/login'} className={`${styles.bottomLink}`}>Resend now</Link>
                        </div>
                    </>
                </FieldForm>
            </FormLayout>
        </>
    )
}
export default Verification