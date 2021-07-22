import styles from './article.module.scss'
import Link from 'next/link'

export default function Article(props) {
    let url = `/posts/${props.data.id}`
    return (
        <div className={styles.container}>
            <Link href={url}>
                <a>
                    <h2 className={styles.title}>{props.data.name}</h2>
                </a>
            </Link>
            <p>{props.data.description}</p>
        </div>
    )
}