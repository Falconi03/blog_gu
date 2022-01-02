import styles from '../styles/Footer.module.css'
import RedesSociais from './RedesSociais'

export default () => {
    return(
        <div className= {styles.Footer}>
            <p>Blog do Guh &copy; 2021</p>
            <RedesSociais></RedesSociais>
        </div>
    )
}