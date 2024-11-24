import styles from './styles.module.scss'
import classNames from 'classnames'
export default function Button ({content, isPrimary = true}) {
    const {button, primaryBtn, secondaryBtn} = styles
    return <button className={classNames(button, isPrimary ? primaryBtn : secondaryBtn)}>
        {content}
    </button>
}