import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next</title>
      </Head>
      <div>
        Home
      </div>
    </Layout>
  )
}
