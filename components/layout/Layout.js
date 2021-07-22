import styles from './layout.module.scss'
import Header from '../header/Header'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Header />
            {children}
        </div>
    )
}