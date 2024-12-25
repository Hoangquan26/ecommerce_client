import styles from './styles.module.scss'
import { listItems } from './constants'
import footerImages from '@images/home/footerGuaranted.png'
export default function Footer () {
    const { container, title, linkWrapper, guarantedWrapper, copyright} = styles
    return <div className={container}>
        <h1 className={title}>HQuanStore Demo</h1>
        <div className={linkWrapper}>
            {
                listItems.map((item, index) => <a key={index} href={item.url}>{item.name}</a>)
            }
        </div>
        <div className={guarantedWrapper}>
            <p>Guaranteed safe checkout</p>
            <img src={footerImages}></img>
        </div>

        <p className={copyright}>Copyright © 2024 hquan2612</p>
    </div>
}