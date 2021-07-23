import { useState } from "react"
import Input from "../input/Input"
import styles from './articleCreator.module.scss'

export default function ArticleCreator() {
    const [title, setTitle] = useState('')
    return (
        <div className={styles.container}>
            <Input 
                name='title'
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
        </div>
    )
}