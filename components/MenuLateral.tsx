import { useContext } from 'react'
import { Context } from '../context/ContextMenu'
import styles from '../styles/MenuLateral.module.css'
import Navbar from './Navbar'
import RedesSociais from './RedesSociais'

export default function MenuLateral(){

    const {menu} = useContext(Context)

    return(
        <div className={menu}>
            <div className={styles.MenuLateral}>
            <div className={styles.Navbar}>
                <Navbar></Navbar>
            </div>
            <div className={styles.Redes}>
                <RedesSociais></RedesSociais>
            </div>
        </div>
        </div>
        
    )
}