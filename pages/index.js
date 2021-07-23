import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import News from '../components/news/News'
import List from '../components/list/List'

export async function getServerSideProps() {
  const res = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-07-22&sortBy=popularity&apiKey=0414355101d342629c26db7d8f0ae77c')
  const news = await res.json()
  console.log(news);
  return {
    props: {
      news
    }
  }
}

export default function Home(props) {
  let news = props.news.articles.map((item, index) => <News data={item} key={index} />)
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
