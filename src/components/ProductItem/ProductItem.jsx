import { numberToEuro } from '@utils/index'
import styles from './styles.module.scss';
export default function ProductItem({name, src, price, preSrc}) {
    const { container, imageContainer, preImage, contentContainer, price_text, name_text } = styles
    return <div className={container}>
        <div className={imageContainer}>
            <img src={src}></img>
            <img className={preImage} src={preSrc}></img>
        </div>
        <div className={contentContainer}>
            <h3 className={name_text}>{name}</h3>
            <span className={price_text}>{numberToEuro(price)}</span>
        </div>
    </div>
}