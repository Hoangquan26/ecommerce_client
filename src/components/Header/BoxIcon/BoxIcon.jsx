import styles from '../styles.module.scss'
import fbIcon from '@icons/svgs/fbico.svg'
import igIcon from '@icons/svgs/igico.svg'
import ytbIcon from '@icons/svgs/ytbico.svg'

import reloadIcon from '@icons/svgs/reload.svg'
import heartIcon from '@icons/svgs/heart.svg'
import cartIcon from '@icons/svgs/cart.svg'
export default function BoxIcon ({type, href, style = 'Social'}) {

    const {boxIconSocial, boxIconFeature} = styles

    const handleRenderIcon = {
        "fb": fbIcon,
        "ig": igIcon,
        "ytb": ytbIcon,
        "reload": reloadIcon,
        "heart": heartIcon,
        "cart": cartIcon
    }

    const handleRenderStyle = {
        "Social": boxIconSocial,
        "Feature": boxIconFeature
    }
    return <div>
        <button className={handleRenderStyle[style]}>
            <img src={handleRenderIcon[type] }></img>
        </button>
    </div>
}