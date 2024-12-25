import styles from './styles.module.scss'
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants"
import MenuItem from "./MenuItem/MenuItem";
import useScroll from '../../hooks/useScroll';
import {  useEffect, useState } from 'react';
import classNames from 'classnames';

import useSidebarInteract from '../../hooks/useSidebarInteract';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/authSlice';
import UserInfo from '../Header/UserInfo/UserInfo';
import { Link, useLocation } from 'react-router';
export default function Header () {
    const location = useLocation()
    const pathname = location.pathname
    const authUser = useSelector(userSelector)
  
    const { currentYPosition } = useScroll()
    const [ fixedHeader, setFixedHeader ] = useState(false)

    const { containerBoxIcon, containerHeaderItem, containerMenuItem, containerHeader, containerWrapper, onFixed, background, logoLink } = styles

    const openCartPressed = useSidebarInteract()

    const handleFixedHeader = () => {
        setFixedHeader(currentYPosition > 83)
    }

    useEffect(() => {
        handleFixedHeader()
    }, [currentYPosition])

    return <div className={classNames(containerWrapper, {
        [onFixed] : (fixedHeader || pathname != '')
    })}>
            <div className={background}></div>
            <div className={containerHeader}>
            <div className={containerHeaderItem}>
                <div className={containerBoxIcon}>
                    {
                        dataBoxIcon.slice(0, 3)?.map((item, index) => {
                            return <BoxIcon key={index} type={item?.type} href={item?.href} style={'Social'}/>
                        })
                    }
                </div>
                <div className={containerMenuItem}>
                    {
                        dataMenu.slice(0, 3).map((item, index) => {
                            return <MenuItem content={item.content} key={index}/>
                        })
                    }
                </div>
            </div>
            <div>
                <Link className={logoLink} to={'/'}>LOGO</Link>
            </div>
            <div className={containerHeaderItem}>
                <div className={containerMenuItem}>
                    {
                        dataMenu.slice(3, 5).map((item, index) => {
                            return <MenuItem onClick={() => {item.action && openCartPressed(item.action, item?.priority ?? null)}} content={item.content} key={index}/>
                        })
                    }
                    {
                        ![undefined, null].includes(authUser) ?
                        <UserInfo/>:
                        <MenuItem onClick={() => {openCartPressed('access', ![undefined, null].includes(authUser) && 'userinfo')}} content='Sign in' />
                    }
                </div>
                
                <div className={containerBoxIcon}>
                    {
                        dataBoxIcon.slice(3, 6)?.map((item, index) => {
                            return <BoxIcon onClick={() => {item.action && openCartPressed(item.action, item?.priority ?? null)}} key={index} type={item?.type} href={item?.href} style={'Feature'}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}