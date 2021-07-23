import styles from './button.module.scss'

export function Button(props) {
    return (
        <button 
            className={styles.button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}