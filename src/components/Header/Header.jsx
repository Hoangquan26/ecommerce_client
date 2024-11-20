import styles from './styles.module.scss'
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants"
import MenuItem from "./MenuItem/MenuItem";
export default function Header () {
    const { containerBoxIcon, containerHeaderItem, containerMenuItem, containerHeader } = styles
    return <div className={containerHeader}>
        <div className={containerHeaderItem}>
            <div className={containerBoxIcon}>
                {
                    dataBoxIcon.slice(0, 3)?.map((item, index) => {
                        return <BoxIcon key={index} type={item?.type} href={item?.href} style={'Social'}/>
                    })
                }
            </div>
            <div className={containerMenuItem}>
                {
                    dataMenu.slice(0, 3).map((item, index) => {
                        return <MenuItem content={item.content} key={index}/>
                    })
                }
            </div>
        </div>
        <div >
            LOGO
        </div>
        <div className={containerHeaderItem}>
            <div className={containerMenuItem}>
                {
                    dataMenu.slice(3, 6).map((item, index) => {
                        return <MenuItem content={item.content} key={index}/>
                    })
                }
            </div>
            <div className={containerBoxIcon}>
                {
                    dataBoxIcon.slice(3, 6)?.map((item, index) => {
                        return <BoxIcon key={index} type={item?.type} href={item?.href} style={'Feature'}/>
                    })
                }
            </div>
        </div>
    </div>
}