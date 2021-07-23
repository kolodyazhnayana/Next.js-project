import styles from './navigation.module.scss'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div className={styles.container}>
            <Link href='/'>
                <a className={styles.link}>Home</a>
            </Link>
            <Link href='/posts/'> 
                <a>Posts</a>
            </Link>
            <Link href='/posts/favorites/'> 
                <a>Favorites</a>
            </Link>
        </div>
    )
}