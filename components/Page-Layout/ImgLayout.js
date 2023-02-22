import styles from './ImgLayout.module.css'
const ImgLayout = ({children}) => {
    return (
        <>
            <div className={styles.formRight}>
                {children}
            </div>
        </>
    );
}
export default ImgLayout