import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import DoubledLine from './DoubledLine/DoubledLine'
export default function AdvancedTitle() {
    const { container, header, title, des, titleWrapper } = styles
    return <MainLayout>
    <div className={container}>
        <div className={header}>
            <p className={des}>Don't miss super offers</p>
            <div className={titleWrapper}>
                <DoubledLine/>
                <h1 className={title}>Our best products</h1>
                <DoubledLine/>
            </div>
        </div>
    </div>
    </MainLayout>
}