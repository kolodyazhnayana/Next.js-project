import React from 'react'
import Layout from '../../components/layout/Layout'
import Head from 'next/head'
import Article from '../../components/article/Article'

export async function getStaticProps() {
    const res = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=0414355101d342629c26db7d8f0ae77c')
    const articles = await res.json()
    console.log(articles);
    return {
        props: {
            articles
        }
    }
}
export default function Posts(props) {
    let article = props.articles.sources.map( (item, index) => <Article data={item} key={index} />)
    return (
        <Layout>
            <Head>
                <title>Posts</title>
            </Head>
            {article}
        </Layout>
    )
}

