import CountDownTimer from '@components/CoutDownTimer/CountDownTimer'
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
export default function TimerProductBanner (){
    const { container, desContainer, title, shadowBox, countdownContainer} = styles
    const targetDate = '2024-12-26T00:00:00'
    return <div className={container}>
        <div className={shadowBox}></div>
        <div className={desContainer}>
            <div className={countdownContainer}>
                <CountDownTimer targetTime={targetDate}/>
            </div>
            <h1 className={title}>The Classics Make A Comeback</h1>
            <Button content={'Buy now'}></Button>
        </div>
    </div>
}