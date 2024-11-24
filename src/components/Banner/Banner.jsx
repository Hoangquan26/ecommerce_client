import Button from '@components/Button/Button'
import styles from './styles.module.scss'
export default function Banner(){
    const { container, content, tilte, description } = styles
    return <div className={container}>
        <div className={content}>
            <h1 className={tilte}>HQuanStore Demo</h1>
            <p className={description}>Make yours celebrations even more special this years with beautiful</p>
            <div>
                <Button content={'Go to shop'}/>
            </div>
        </div>
    </div>
}