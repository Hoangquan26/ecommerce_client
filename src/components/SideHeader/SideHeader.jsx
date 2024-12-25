import styles from './styles.module.scss'
export default function SideHeader({content, icon}){
    const { header, title } = styles
    return  <div className={header}>
        {icon || ''}
        <h1 className={title}>{content}</h1>
    </div>
}