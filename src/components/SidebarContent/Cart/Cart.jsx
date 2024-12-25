import { BsCart3 } from "react-icons/bs";
import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import SideHeader from "../../SideHeader/SideHeader";
import ProductItem from "../ProductItem/ProductItem";
const products = [
    ''
]
export default function SideCart({}) {
    const { container, content, btnWrapper, productWrapper, totalWrapper } = styles
    return <div className={container}>
        <SideHeader content={'CART'} icon={<BsCart3/>}/>
        <div className={content}>
            {
                !products.length ? 
                <p>No products in the cart.</p> :
                <div className={productWrapper}>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            }
            {
                !products.length ? 
                <div>
                    <Button content={'RETURN TO SHOP'} isPrimary={false}/>
                </div>
                :
                <div className={btnWrapper}>
                    <div className={totalWrapper}>
                        <h1>Subtotal:</h1>
                        <span>$290.20</span>
                    </div>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false}/>
                </div>
            }
        </div>
    </div>
}