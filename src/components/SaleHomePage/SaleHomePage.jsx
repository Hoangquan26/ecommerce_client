import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
export default function SaleHomePage(){
    const { container, contentContainer, boxImage, title, des } = styles
    const [scrollDirection, setScrollDirection] = useState(null)
    const [currentYPosition, setCurrentYPosition] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const currentScrollY = useRef(0)
    const SaleHomePageDOM = useRef(null)
    const handleScrollDirection = () => {
        const currentWindowY = window.scrollY
        if(currentWindowY > currentScrollY.current) {
            setScrollDirection('down')
        }
        else if (currentWindowY < currentScrollY.current) {
            setScrollDirection('up')
        }
        setCurrentYPosition(currentWindowY)
        currentScrollY.current = currentWindowY < 0 ? 0 : currentWindowY 
    }
    console.log(translateX)
    const handleTranslateX = () => {
        if(currentYPosition >= 1440 && scrollDirection == 'down') {
            setTranslateX(prev => prev < 120 ? prev + 1 : 120)
        }
        else {
            setTranslateX(prev => prev > 0 ? prev - 1 : 0)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollDirection)
        return () => window.removeEventListener('scroll', handleScrollDirection)
    }, [])
    useEffect(() => {
        handleTranslateX()
    }, [currentYPosition])
    return <div className={container} ref={SaleHomePageDOM}>
        <div style={{transform: `translateX(${-translateX}px)`}}  className={boxImage}>
            <img src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"></img>
        </div>
        <div className={classNames(contentContainer)}>
            <h1 className={title}>Sale of the year</h1>
            <p className={des}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
            <Button content='Read more' isPrimary={false}></Button>
        </div>
        <div className={boxImage}>
            <img style={{transform: `translateX(${translateX}px)`}} src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"></img>
        </div>
    </div>
}