import { useEffect } from "react"
import { useState } from "react"
import styles from './styles.module.scss';
export default function CountDownTimer({targetTime}){

    const [countDown, setCountDown] = useState(handleCountDown())
    const { item, spanTag, currentTime } = styles
    function handleCountDown  () {
        const currentDate = new Date()
        const targetDate = new Date(targetTime)
        const different = targetDate - currentDate
        let timer = {}
        if(different > 0) {
            timer = {
                day: Math.floor((different / (1000 * 60 * 60 * 24)) % 60),
                hour: Math.floor((different / (1000 * 60 * 60)) % 60),
                minute: Math.floor((different / (1000 * 60)) % 60),
                second: Math.floor((different / 1000) % 60)
            }
        }
        return timer
    }

    function formatNumer(number) {
        return String(number).padStart(2, '0')
    }
    const timerComponent = [] 
    Object.keys(countDown).forEach((time) => {
        if(![undefined, null].includes(countDown[time])) {
            timerComponent.push(
                <p key={time} className={item}>
                    <span className={currentTime}>{formatNumer(countDown[time])}</span> <span className={spanTag}>{time}</span>
                </p>
            )
        }
    })
    useEffect(() => {
        setTimeout(() => {
            setCountDown(handleCountDown())
        }, 1000);
    })
    return <>
        {timerComponent}
    </>
}