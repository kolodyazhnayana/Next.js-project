import styles from './articleDetail.module.scss'

export default function ArticleDetail(props) {
    return (
        <div className={styles.container}>
            <h1>{props.data.name}</h1>
            <p>{props.data.description}</p>
        </div>
    )
}