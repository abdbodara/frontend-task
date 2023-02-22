import Button from "@/components/Button/Button";
import FieldForm from "@/components/Card-Form/Card";
import Input from "@/components/InputField/Input";
import FormLayout from "@/components/Page-Layout/CardLayout";
import Link from "next/link";
import styles from "../../../../styles/Login.module.css"

const CreatePassword = () => {
    return(
        <>
         <>
            <FormLayout page="create_password">
                <FieldForm
                    title="Enter New Password"
                >
                    <>
                    <div className={styles.inputFieldWrapper}>
                        <Input type="password" placeholder="New Password" />
                        <Input type="password" placeholder="Confirm Password" className="mb-0" />
                    </div>
                        <Button title="Submit" innerBtn={styles.innerBtn} className={`${styles.loginButton} ${styles.confirmBtn}`} />
                    </>
                </FieldForm>
            </FormLayout>
        </>
        </>
    );
}
export default CreatePassword