import styles from '../styles/Home.module.css'
import { FaBookOpen, FaPenAlt } from 'react-icons/fa'
import Prismic from 'prismic-javascript'
import Link from 'next/link'

export default function index(props){
  const { posts } = props
  const postHome = posts.slice(0, 3)
  return (
    <div className={styles.Container}>
      <div className={styles.FotoFundo}>
        <div className={styles.TextoFoto}>
          <p>&quot;Wheeeere I goooo...</p>
          <p>I just don&apos;t knoooow...</p>
          <p>I got to got to gotta take it slow...</p>
          <p>When I fiiiiind my piece of miiiind...</p>
          <p>I&apos;m gonna give you some of my good time&quot; 🤘💚</p>
          <h3>Soul To Squeeze - Red Hot Chili Peppers</h3>
        </div>
      </div>
      <div className={styles.Blog}>
        <Link href='/Blog'>
          <a className={styles.LinkBlog}>
            <h1><FaBookOpen /> Blog <FaPenAlt /></h1>
          </a>
        </Link>
        {postHome.map((post, id) => (
          <Link href={`/Blog/${post.uid}`} key={id}>
            <a>
              <div className={styles.Post}>
                <div className={styles.ImgPost}>
                  <img
                    className={styles.Img}
                    src={post.data.foto.url}
                    alt=''
                  />
                </div>
                <div className={styles.TextPost}>
                  <h1>{post.data.title}</h1>
                  <p>{post.data.text}</p>

                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const client = Prismic.client('https://blog-gustavo.prismic.io/api/v2')
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog-post')

  )
  return {
    props: {
      posts: posts.results,
    }
  }
}