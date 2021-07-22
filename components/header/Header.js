import styles from './header.module.scss'
import Image from 'next/image'
import Navigation from '../navigation/Navigation'

export default function Header() {
    return (
        <div className={styles.container}>
            <Image 
                src='/images/next.png' 
                width={160}
                height={80}
                alt='Next'
            />
            <Navigation />
        </div>
    )
}