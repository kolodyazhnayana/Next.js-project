import { useState } from "react"
import Input from "../input/Input"
import { Textarea } from "../textarea/Textarea"
import styles from './articleCreator.module.scss'

export default function ArticleCreator() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    return (
        <div className={styles.container}>
            <Input 
                name='title'
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <Textarea
                name='description'
                placeholder='Description'
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
            />
        </div>
    )
}