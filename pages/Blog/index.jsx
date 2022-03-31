import styles from '../../styles/Home.module.css'
import { FaBookOpen, FaPenAlt } from 'react-icons/fa'
import Prismic from 'prismic-javascript'
import Link from 'next/link'
   

const Blog = (props) => {
    const { posts } = props
    return(
        <div className={styles.Container}>
            <h1><FaBookOpen/> Blog <FaPenAlt/></h1>
            <div className={styles.Blog}>
                {posts.map((post, id)=>(
                <Link href={`/Blog/${post.uid}`} key={id}>
                    <a>
                        <div className={styles.Post}>
                            <div  className={styles.ImgPost}>
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
export async function getServerSideProps({res}) {
    const client = Prismic.client('https://blog-gustavo.prismic.io/api/v2')
    const posts = await client.query(
        Prismic.Predicates.at('document.type', 'blog-post')
    )
    return{
        props: {
            posts: posts.results,
        }
    }
}
export default Blog