import Link from "next/link";
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from '../styles/RedesSociais.module.css'

export default function RedesSociais(){
    return(
        <ul className={styles.Redes}>
            <li><Link href='https://web.facebook.com/gustavo.marreiros'><a target="_blank"><FaFacebook/></a></Link></li>
            <li><Link href='https://www.instagram.com/gustavo.marreiros/?hl=pt-br'><a target="_blank"><FaInstagram/></a></Link></li>
            <li><Link href='https://www.linkedin.com/in/gustavo-marreiros/'><a target="_blank"><FaLinkedin/></a></Link></li>
        </ul>
    )
}