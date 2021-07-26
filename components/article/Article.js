import styles from './article.module.scss'
import Link from 'next/link'
import { Button } from '../button/Button'
import { useDispatch } from 'react-redux'
import { removeArticle } from '../../store/actionCreators'

export default function Article(props) {
    const dispatch = useDispatch()

    let url = `/posts/${props.data.id}`

    return (
        <div className={styles.container}>
            <Link href={url}>
                <a>
                    <h2 className={styles.title}>{props.data.name}</h2>
                </a>
            </Link>
            <p>{props.data.description}</p>
            {props.created && <Button onClick={() => dispatch(removeArticle(props.data))}>Delete</Button>}
        </div>
    )
}