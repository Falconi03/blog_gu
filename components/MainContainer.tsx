import Header from './Header'
import Footer from './Footer'
import MenuLateral from './MenuLateral'
import styles from '../styles/MainContainer.module.css'
import { ContextProvider } from '../context/ContextMenu'


export default function MainContainer({ children }) {
    return (
        <div>
            <ContextProvider>
                <div className={styles.MainContainer}>
                    <MenuLateral></MenuLateral>
                    <div className={styles.page}>
                        <Header></Header>
                        <div>{children}</div>
                        <Footer></Footer>
                    </div>
                </div>
            </ContextProvider>
        </div>


    )
}