import Head from "next/head"
import Link from "next/link"


const FirstPost = () => {
    return(
        <>
        <Head>
            <title>最初の投稿</title>
        </Head>
        <div>
            <h1>最初の投稿</h1>
            <Link href="/">ホームへ戻る</Link>
        </div>
        </>
    )
}

export default FirstPost