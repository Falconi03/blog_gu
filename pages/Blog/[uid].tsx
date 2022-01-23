import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents';
import { GetStaticProps, GetStaticPaths } from 'next';

import styles from '../../styles/Post.module.css'

const client = Prismic.client('https://blog-gustavo.prismic.io/api/v2')

interface PathProps {
  params: {
    uid: string;
  };
}

interface PropTypes {
  post: Document;
}

export default function BlogPost({ post }: PropTypes): JSX.Element {
  return (
        <div className={styles.Post}>
          <img
              className={styles.Img}
              src={post.data.foto.url}
              alt=''
          />
          <div className={styles.TextPost}>
              <h1>{post.data.title}</h1>
              <p>{post.data.text}</p>
          </div>       
        </div>
    )
}



export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await client.query(
      Prismic.Predicates.at('document.type', 'blog-post'),
      { orderings: '[my.post.date desc]' }
    );
  
    const allBlogPosts = [];
  
    posts.results.map((post) => {
      allBlogPosts.push({ params: { uid: post.uid } });
    });
  
    return {
      paths: allBlogPosts,
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
    const mapNumberToMonth = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
  
    const post = await client.getByUID('blog-post', params.uid, {
      lang: 'pt-br',
      
    });
  
    return {
      props: {
        post,
      },
    };
  };
