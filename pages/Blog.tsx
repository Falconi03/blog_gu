import styles from '../styles/Home.module.css'
import { FaBookOpen, FaPenAlt } from 'react-icons/fa'

export default () => {
    return(
        <div className={styles.Container}>
            <h1><FaBookOpen/> Blog <FaPenAlt/></h1>
        </div>
    )
}