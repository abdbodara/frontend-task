import Footer from '@/components/Footer/Footer';
import DashNav from '../Dashboard_Navbar/DashNav';
import styles from './DashbordLayout.module.css'
const Dashboard_Layout = ({children}) => {
    return (
        <>
            <main>
                <DashNav />
                    <div className={styles.wrapper}>
                        {children}
                    </div>
                <Footer />
            </main>
        </>
    );
}
export default Dashboard_Layout