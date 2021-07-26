import Layout from "../../../components/layout/Layout"
import Head from 'next/head'
import ArticleCreator from "../../../components/articleCreator/ArticleCreator"
import Article from '../../../components/article/Article'
import { connect } from "react-redux"

function Create(props) {
    let article = props.data.map((item, index) => <Article created data={item} key={index} />)
    return (
        <Layout>
            <Head>
                <title>Create</title>
            </Head>
            <ArticleCreator />
            {article}
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.articles,
    }
}

export default connect(mapStateToProps, () => ({}))(Create)
