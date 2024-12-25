import styles from './styles.module.scss'
import classNames from 'classnames'
export default function Button ({content, isPrimary = true, ...props}) {
    const {button, primaryBtn, secondaryBtn} = styles
    return <button {...props} className={classNames(button, isPrimary ? primaryBtn : secondaryBtn)}>
        {content}
    </button>
}