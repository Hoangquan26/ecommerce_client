import styles from  '../styles.module.scss'

export default function MenuItem({content, href, ...props}) {
    const { menuItem } = styles
    return <div className={menuItem} {...props}>
        {content}
    </div>
}