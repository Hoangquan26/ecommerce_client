'use strict'

import { useEffect, useRef, useState } from "react"

export default function useScroll() {
    const [scrollDirection, setScrollDirection] = useState(null)
    const [currentYPosition, setCurrentYPosition] = useState(0)
    const currentScrollY = useRef(0)
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
    useEffect(() => {
        window.addEventListener('scroll', handleScrollDirection)
        return () => window.removeEventListener('scroll', handleScrollDirection)
    }, [])

    return {
        currentYPosition,
        scrollDirection
    }
}