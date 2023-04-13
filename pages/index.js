//画像やアイコンなどはpublicフォルダへ、publicフォルダは省略してパスを書く

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilStyle from '../styles/utils.module.css'
import {getPostsDate} from "../lib/post"



// const inter = Inter({ subsets: ['latin'] })

//SSGの場合
export async function getStaticProps() {
  const allPostDate = getPostsDate()
  console.log(allPostDate)

  return {
    props: {
      allPostDate,
    }
  }
}

//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home({ allPostDate }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>めろです。郡山市の若葉町に住んでるにゃ。ろーずも一緒にゃ。同居人はしょうへいとありさにゃ。</p>
      </section>

      <section>
        <h2>📝めろの日常ブログ</h2>
        <div className={styles.grid}>
          {allPostDate.map(({ id,title,date,thumbnail })=> (
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={thumbnail} 
              className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href={`/posts/${id}`}>
              <a className={utilStyle.boldText}>{title}</a>
            </Link>
            <br/>
            <small className={utilStyle.lightText}>{date}</small>
          </article>
          ))}

          
        </div>
      </section>

    </Layout>
  )
}
