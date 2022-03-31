import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../context/ContextMenu'

import styles from '../styles/Header.module.css'
import Navbar from './Navbar'
import RedesSociais from './RedesSociais'
import { FaBars } from 'react-icons/fa'

export default () => {

    const {ShowMenu} = useContext(Context)

    return(
        <div className={styles.Header}>
            <div className={styles.Nome}>
                <Link href="/">
                    <a>
                        <h1>Gustavo<span>Marreiros</span></h1>
                    </a>
                </Link>
                
            </div>
            <button className={styles.btnMenu} onClick={()=>ShowMenu()}><FaBars/></button>
            <div className={styles.Navbar}>
                <Navbar></Navbar>
            </div>
            <div className={styles.Redes}>
                <RedesSociais></RedesSociais>
            </div>
        </div>
    )
}