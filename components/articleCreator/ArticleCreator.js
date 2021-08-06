import { useState } from "react"
import { Button } from "../button/Button"
import Input from "../input/Input"
import { Textarea } from "../textarea/Textarea"
import styles from './articleCreator.module.scss'
import { addArticle } from '../../store/actionCreators'
import { useDispatch } from "react-redux"
import { connect } from "react-redux"
import { useFileUpload } from 'use-file-upload'

function ArticleCreator(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [error, setError] = useState('false')
    
    const [files, selectFiles] = useFileUpload()

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
            image: files,
            id: props.id
        }        
        dispatch(addArticle(article))
        setTitle('')
        setDesc('')
        e.preventDefault()
    }

    console.log(files)

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
                {
                    files && 
                    files.map((file, index) => (
                        <div className={styles.wrap} key={index}>
                            <img 
                                src={file.source} 
                                alt='preview' 
                                className={styles.image} 
                            />
                            <span>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault()
                                    }}
                                >
                                    Delete
                                </Button>
                            </span>
                        </div>
                    ))
                }
                <div className={styles.wrap}>
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            selectFiles( { multiple: true }, (files) => {
                                files.map(({ source, name, size, file }) => {
                                    console.log({ source, name, size, file })
                                })
                            })
                        }}
                    >
                        Click to upload
                    </Button>
                    <Button 
                        type='submit'
                    >
                        Create
                    </Button>
                </div>
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
