import React from 'react'
import Head from 'next/head'
import Layout from '../../../components/layout/Layout'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>Post</title>
            </Head>
            <div>First post</div>
        </Layout>
    )
}

export default FirstPost