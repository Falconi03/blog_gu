import Link from 'next/link'

import styles from '../styles/Header.module.css'
import Navbar from './Navbar'
import RedesSociais from './RedesSociais'

export default () => {
    return(
        <div className={styles.Header}>
            <div className={styles.Nome}>
                <Link href="/">
                    <a>
                        <h1>Gustavo<span>Marreiros</span></h1>
                    </a>
                </Link>
                
            </div>
            <div className={styles.Navbar}>
                <Navbar></Navbar>
            </div>
            <div className={styles.Redes}>
                <RedesSociais></RedesSociais>
            </div>
        </div>
    )
}