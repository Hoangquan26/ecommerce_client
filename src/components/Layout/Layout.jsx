
import styles from "./styles.module.scss"
export default function MainLayout({children}) {
    const { wrapLayout, container } = styles
    return <div className={wrapLayout}>
        <div className={container}>
            {children}
        </div>
    </div>
}