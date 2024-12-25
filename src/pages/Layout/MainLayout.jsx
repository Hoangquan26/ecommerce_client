import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import { Outlet } from 'react-router'
import styles from './styles.module.scss'
export default function MainLayout() {
    const { container } = styles
    return (
        <div className={container}>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    )
}
