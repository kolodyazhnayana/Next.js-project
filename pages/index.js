import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import News from '../components/news/News'
import List from '../components/list/List'
import { getNews } from '../api/getNews'

export async function getServerSideProps() {
  const news = await getNews()
  console.log(news)
  return {
    props: {
      news
    }
  }
}

export default function Home(props) {
  let news = props.news.news.articles.map((item, index) => <News data={item} key={index} />)
  return (
    <Layout>
      <Head>
        <title>News</title>
      </Head>
      <List>
        {news}
      </List>
    </Layout>
  )
}
