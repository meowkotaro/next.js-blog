import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postDirectory = path.join(process.cwd(), "posts") //ディレクトリを指定

//mdファイルのデータを取り出す
export const getPostsDate = () => {
    const fileNames = fs.readdirSync(postDirectory); //ディレクトリからファイルを取り出す
    const allPostData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, ""); //ファイル名を取り出す

        const fullPath = path.join(postDirectory, fileName)
        const fileContent = fs.readFileSync(fullPath, "utf8")

        const matterResult = matter(fileContent)
        

        //idとデータを返す
        return {
            id,
            ...matterResult.data,
        }
    })
    return allPostData
}

//getstaticPathでreturnで使うPathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
            id: fileName.replace(/\.md$/, "")
            }
        }
    })
    /*
    [
        {
            params: {
                id: ssg-ssr.md 
            }
        }
    ] 
    */
}

//idに基づいてブログ投稿データを返す
export async function getPostData(id) {
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContent = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContent)

    const blogContent = await remark().use(html).process(matterResult.content);

    const blogContentHTML = blogContent.toString();

    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    }
}