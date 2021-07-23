import styles from './list.module.scss'

export default function List(props) {
    let item = []
    for(let i = 0; i < Math.ceil(props.children.length/2); i++) {
        item[i] = props.children.slice((i*2), (i*2) + 2)
    }
    let elems = item.map((el, index) => <div className={styles.container} key={index}>{el}</div>)
    return (
        <div>
            {elems}
        </div>
    )
}