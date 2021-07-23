import styles from './news.module.scss'
import Link from 'next/link'

export default function News(props) {
    let date = new Date(props.data.publishedAt).toLocaleString()
    return (
        <div className={styles.container}>
            <Link href={props.data.url}>
                <a>
                    <h2 className={styles.title}>{props.data.title}</h2>
                </a>
            </Link>
            <p className={styles.author}>{props.data.author}</p>
            <p>{date}</p>
            <p dangerouslySetInnerHTML={{ __html: props.data.description }}></p>
            <img
                src={props.data.urlToImage}
                className={styles.img}
            />
        </div>
    )
}