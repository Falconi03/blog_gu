import styles from '../styles/Home.module.css'
import {FaBookOpen, FaPenAlt} from 'react-icons/fa'

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.FotoFundo}>
        <div className={styles.TextoFoto}>
          <p>"Wheeeere I goooo...</p>
          <p>I just don't knoooow...</p>
          <p>I got to got to gotta take it slow...</p>
          <p>When I fiiiiind my piece of miiiind...</p>
          <p>I'm gonna give you some of my good time" 🤘💚</p>
          <h3>Soul To Squeeze - Red Hot Chili Peppers</h3>
        </div>
      </div>
      <h1><FaBookOpen/> Blog <FaPenAlt/></h1>
      <div className= {styles.Blog}>
        <div className={styles.Post}>
          <div className={styles.ImgPost}></div>
          <div className={styles.TextPost}>
            <h2>Teste</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
