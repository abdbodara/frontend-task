import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css"

const Layout = ({children}) => {
    return(
        <>
            <main>
                <Navbar />
                <div className={styles.loginWrapper}>
                    {children}
                </div>
                <Footer />
            </main>
        </>
    );
}
export default Layout