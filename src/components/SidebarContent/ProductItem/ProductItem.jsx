import styles from './styles.module.scss'
import { IoCloseOutline } from "react-icons/io5";
import productImage from '../../../assets/images/products/product_1.jpg'
export default function ProductItem({}) {
    const { container, productWrapper, title, description, contentWrapper, icoWrapper } = styles
    return <div className={container}>
        <div className={productWrapper}>
            <img src={productImage}></img>
        </div>
        <div className={contentWrapper}>
            <h1 className={title}>Consectetur nibh aasdasda123123312sdasasdt</h1>
            <p className={description}><span>1</span> x <span>$99.99</span></p>
        </div>

        <div className={icoWrapper}>
            <IoCloseOutline/>
        </div>
    </div>
}