import styles from  '../styles.module.scss'

export default function MenuItem({content, href}) {
    const { menuItem } = styles
    return <div className={menuItem}>
        {content}
    </div>
}