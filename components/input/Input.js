import styles from './input.module.scss'

export default function Input(props) {
    return (
        <input 
            className={styles.input}
            value={props.value}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
        />
    )
}