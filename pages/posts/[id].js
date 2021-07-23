import ArticleDetail from '../../components/articleDetail/ArticleDetail'
import Layout from '../../components/layout/Layout'
import { getArticles } from '../../api/getArticles'
import Head from 'next/head'

export async function getStaticProps({params}) {
    const articles = await getArticles()
    let article = articles.articles.sources.find(item => item.id === params.id)
    return {
        props: article
    }
}

export async function getStaticPaths() {
    const data = await getArticles()

    let paths = data.articles.sources.map(item => ({
        params: {id: item.id}
    }))
    return {
        paths,
        fallback: false
    }
}

export default function Post(props) {
    console.log(props)
    return (
        <Layout>
            <Head>
                <title>{props.name}</title>
            </Head>
            <ArticleDetail data={props} />
        </Layout>
    )
}