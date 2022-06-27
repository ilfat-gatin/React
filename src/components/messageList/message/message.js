import styles from "./message.module.css"

export function Message(props) {
    return (
        <div className={styles.message}>
            <div className={styles.message_wrapper}>
                <p className={styles.message_time}>{props.date}</p>
                <p className={styles.message_author}>{props.author}</p>
            </div>            
            <p className={styles.message_text}>{props.text}</p>            
        </div>
    )
}
