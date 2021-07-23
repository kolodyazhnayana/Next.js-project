import React from 'react'
import Layout from '../../components/layout/Layout'
import Head from 'next/head'
import Article from '../../components/article/Article'
import { getArticles } from '../../api/getArticles'

export async function getStaticProps() {
    const articles = await getArticles()
    console.log(articles)
    return {
        props: {
            articles
        }
    }
}

export default function Posts(props) {
    let articles = props.articles.articles.sources.map( (item, index) => <Article data={item} key={index} />)
    return (
        <Layout>
            <Head>
                <title>Posts</title>
            </Head>
            {articles}
        </Layout>
    )
}

