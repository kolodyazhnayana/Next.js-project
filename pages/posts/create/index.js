import Layout from "../../../components/layout/Layout"
import Head from 'next/head'
import ArticleCreator from "../../../components/articleCreator/ArticleCreator"

export default function Favorites() {
    return (
        <Layout>
            <Head>
                <title>Create</title>
            </Head>
            <ArticleCreator />
        </Layout>
    )
}