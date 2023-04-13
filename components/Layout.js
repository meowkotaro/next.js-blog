import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Mero Blog"
export const siteTitle = "Nest.js 学習"


const Layout = ({children , home}) => {
    return ( 
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} src="/images/mero.png" alt="" />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img className={`${styles.headerImage} ${utilStyles.borderCircle}`} src="/images/mero.png" alt="" />
                        <h1 className={utilStyles.headingXl}>{name}</h1>
                    </>
                )}
                
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">← ホームへ戻る</Link>
                </div>
            )}
        </div>
     );
}
 
export default Layout;
<Head>
    <link rel="icon" href="/" />
</Head>