import styles from './input.module.scss'

export default function Input(props) {
    let classList = props.error == 'true' ? styles.input_error : ''
    let placeholder = props.error == 'true' ? props.errorText : props.placeholder
    
    return (
        <input 
            className={`${styles.input} ${classList}`}
            value={props.value}
            placeholder={placeholder}
            name={props.name}
            onChange={props.onChange}
            error={props.error}
            type={props.type}
        />
    )
}