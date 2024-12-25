import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import useScroll from '../../hooks/useScroll'
export default function SaleHomePage(){
    const {currentYPosition, scrollDirection} = useScroll()
    
    const { container, contentContainer, boxImage, title, des, image } = styles
    const [translateX, setTranslateX] = useState(0)
    const SaleHomePageDOM = useRef(null)


    const handleTranslateX = () => {
        if(currentYPosition >= 1440 && scrollDirection == 'down') {
            setTranslateX(prev => prev < 160 ? prev + 1 : 160)
        }
        else {
            setTranslateX(prev => prev > 0 ? prev - 1 : 0)
        }
    }

    useEffect(() => {
        handleTranslateX()
    }, [currentYPosition])
    return <div className={container} ref={SaleHomePageDOM}>
        <div className={boxImage}>
            <img className={image} style={{transform: `translateX(${-translateX}px)`}}  src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"></img>
        </div>
        <div className={classNames(contentContainer)}>
            <h1 className={title}>Sale of the year</h1>
            <p className={des}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
            <Button content='Read more' isPrimary={false}></Button>
        </div>
        <div className={boxImage}>
            <img className={image} style={{transform: `translateX(${translateX}px)`}} src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"></img>
        </div>
    </div>
}