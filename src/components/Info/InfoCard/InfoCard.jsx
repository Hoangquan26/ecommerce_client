import styles from '../styles.module.scss'

export default function InfoCard({src, title, description}) {
    const {infoCardContainer, infoCardTitle, infoCardDescription, infoCard} = styles
    return <div className={infoCard}>
        <div>
            <img src={src}></img>
        </div>
        <div className={infoCardContainer}>
            <h2 className={infoCardTitle}>{title}</h2>
            <p className={infoCardDescription}>{description}</p>
        </div>
    </div>
}