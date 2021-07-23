import styles from './textarea.module.scss'

export function Textarea(props) {
    return (
        <textarea
            className={styles.textarea}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
        />
    )
}