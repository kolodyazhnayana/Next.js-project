import { useState } from "react"
import { Button } from "../button/Button"
import Input from "../input/Input"
import { Textarea } from "../textarea/Textarea"
import styles from './articleCreator.module.scss'
import { addArticle } from '../../store/actionCreators'
import { useDispatch } from "react-redux"
import { connect } from "react-redux"

function ArticleCreator(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [error, setError] = useState('false')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        if(title == '' || desc == '') {
            setError('true')
            e.preventDefault()
            return
        } else {
            setError('false')
        }
        let article = {
            name: title,
            description: desc,
            id: props.id
        }        
        dispatch(addArticle(article))
        setTitle('')
        setDesc('')
        e.preventDefault()
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <Input 
                    name='name'
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    error={error}
                    errorText='Fill in the name'
                />
                <Textarea
                    name='description'
                    placeholder='Description'
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    error={error}
                    errorText='Fill in the description'
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

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}

export default connect (mapStateToProps, () => ({}))(ArticleCreator)
