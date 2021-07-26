import styles from './textarea.module.scss'

export function Textarea(props) {
    let classList = props.error == 'true' ? styles.textarea_error : ''
    let placeholder = props.error == 'true' ? props.errorText : props.placeholder
    return (
        <textarea
            className={`${styles.textarea} ${classList}`}
            placeholder={placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            error={props.error}
        />
    )
}