import Header from "../Header/Header";
import styles from "./styles.module.scss"
export default function MainLayout({children}) {
    const { wrapLayout } = styles
    return <div className={wrapLayout}>
       {children}
    </div>
}