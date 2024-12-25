import React from 'react'
import styles from './styles.module.scss'
import { Link, Outlet } from 'react-router'

import { useLogoutMutation } from '@features/authSlice.api'
import { logOut } from '@features/authSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
export default function UserSetting() {
    const {container, linkWrapper, routeWrapper, title, linkItem} = styles
    const [logout, {error, isError}] = useLogoutMutation()
    
    const dispatch = useDispatch()
    const handleLogout = async(e) => {
        e.preventDefault()
        const res = await logout()
       
        if(res?.data) {
            dispatch(logOut())
        }
        else if (res?.error) {
            toast.error("Something wrong", {
                autoClose: 3000,
                closeButton: true
            })
        }
    } 
    return (
        <div className={container}>
            <div className={linkWrapper}>
                <h2 className={title}>Account</h2>
                <ul className={linkWrapper}>
                    <li className={linkItem}>
                        <Link to={''}>Account Information</Link>   
                    </li>
                    <li className={linkItem}>
                        <Link to={'all-address'}>Your addresses</Link>
                    </li>
                    <li className={linkItem}>
                        <Link to={''}>Order history</Link>
                    </li>
                    <li className={linkItem}>
                        <Link onClick={(e) => handleLogout(e)}>Log out</Link>
                    </li>
                </ul>
            </div>
            <div className={routeWrapper}>
                {/* <AccountInfo/> */}
                {/* <AccountAddress/> */}
                <Outlet/>
            </div>
        </div>
    )
}
