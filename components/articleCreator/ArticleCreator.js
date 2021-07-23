import { useState } from "react"
import { Button } from "../button/Button"
import Input from "../input/Input"
import { Textarea } from "../textarea/Textarea"
import styles from './articleCreator.module.scss'

export default function ArticleCreator() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = (e) => {
        let post = {
            title: title,
            description: desc
        }
        e.preventDefault()
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
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
                <Button 
                    type='submit'
                >
                    Create
                </Button>
            </form>
        </div>
    )
}