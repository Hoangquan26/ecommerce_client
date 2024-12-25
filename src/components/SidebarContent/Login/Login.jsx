import { BsCart3 } from "react-icons/bs";
import Button from '@components/Button/Button'
import styles from './styles.module.scss'
import SideHeader from "../../SideHeader/SideHeader";
export default function LoginSide({}) {
    const { container, content } = styles
    return <div className={container}>
        <SideHeader content={'Cart'} icon={<BsCart3/>}/>
        <div className={content}>
            <p>No products in the cart.</p>
            <Button content={'RETURN TO SHOP'} isPrimary={false}/>
        </div>
    </div>
}