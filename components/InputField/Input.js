import styles from './Input.module.css'
const Input = ({ type, placeholder, Icon1, Icon2, className, radius , onChange, value, changeIcon }) => {
    return (
        <>
            <div className={`${styles.fieldWrapper} ${className} `}>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    className={`${styles.inputField}  ${radius === "radius" && styles.radius}`}
                    onChange={onChange} />
                {
                    Icon1 && <span className={styles.styleIcon} onClick={changeIcon}>{type === "password" ? Icon2 : Icon1}</span>
                }

            </div>
        </>
    );
}
export default Input