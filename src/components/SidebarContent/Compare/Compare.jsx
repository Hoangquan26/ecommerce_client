import SideHeader from '../../SideHeader/SideHeader'
import styles from './styles.module.scss'
import { TfiReload } from "react-icons/tfi";

export default function SideCompare() {
    const { container, content } = styles
    return <div className={container}>
        <SideHeader content={'Compare'} icon={<TfiReload/>}/>
        <div className={content}>
            <p>No products in the compare.</p>
        </div>
    </div>
}