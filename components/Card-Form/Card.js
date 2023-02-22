import styles from './Card.module.css'
const FieldForm = ({ children, title, subTitle }) => {

    return (
        <>
            <div className={styles.loginForm}>
                <h2 className='text-center'>{title}</h2>
                {
                    subTitle && <p className={`text-center ${styles.subTitle}`}>{subTitle}</p>
                }
                {children}
            </div>
        </>
    );
}
export default FieldForm
