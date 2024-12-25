import { CiHeart } from "react-icons/ci";
import SideHeader from '../../SideHeader/SideHeader'
import styles from './styles.module.scss'
export default function SideWishList(){
    const { container, detail } = styles
    return <div className={container}>
        <SideHeader content={'WISHLIST'} icon={<CiHeart/>}/>
        <p className={detail}>No products in the wishlist.</p>
    </div>
}