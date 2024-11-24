import TimerProductBanner from '../TimerProductBanner/TimerProductBanner'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import { dataProduct } from './constants'
import ProductItem from '@components/ProductItem/ProductItem'
export default function ListProduct({products}) {
    const { container } = styles

    return <MainLayout>
        <div className={container}>
            <TimerProductBanner/>
            {
                products.length ? 
                products.map((product, index) => {
                    return <ProductItem key={index} name={product.name} src={product.images[0]} preSrc={product.images[1]} price={product.price}/>
                }) : "Không có sản phẩm nào để hiển thị"
            }
        </div>
    </MainLayout>
}