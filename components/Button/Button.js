import styles from "./Button.module.css"
const Button = ({title , className , innerBtn , onClick}) => {
    return (
        <>
            <div className={`${styles.buttonWrapper}  ${className}`}>
                <button className={`${styles.btnLight} ${innerBtn}`} onClick={onClick}>{title}</button>
            </div>
        </>
    );
}
export default Button