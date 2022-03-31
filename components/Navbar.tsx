import Link from "next/link"

import styles from "../styles/NavBar.module.css"

export default function Navbar(){
    return(
        <ul className={styles.Navbar}>
            <li><Link href='/'><a>INICIO</a></Link></li>
            <li><Link href='/Blog'><a>BLOG</a></Link></li>
            <li><Link href='/Sobre'><a>SOBRE</a></Link></li>
        </ul>
    )
}