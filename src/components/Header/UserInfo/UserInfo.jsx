import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { FaRegUser } from "react-icons/fa";
import { RiArrowDownWideFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { logOut, userSelector } from '../../../features/authSlice'
import { Link } from 'react-router'
import DoubledLine from '../../AdvancedTitle/DoubledLine/DoubledLine';
import classNames from 'classnames';
import { useLogoutMutation } from '@features/authSlice.api'
export default function UserInfo() {
    const dispatch = useDispatch()
    const ref = useRef()
    const [isOpen, setIsOpen] = useState(true)
    const { container, userInfoWrapper, containerWrapper, title, icon, userMenu, linkWrapper, linkUserName, openMenu } = styles
    const authUser = useSelector(userSelector)
    const [logout] = useLogoutMutation()
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
    const toggleUserMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleClickOutside = useCallback((e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(true); 
        }
    }, []);
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);
    return (
       <div ref={ref} className={containerWrapper} >
            <div className={container} onClick={(e) => {
                e.stopPropagation(); 
                toggleUserMenu();
            }}>
                <FaRegUser className={icon}/>
                <div className={userInfoWrapper}>
                    <h1 className={title}>{authUser?.name ?? 'Un'}</h1>
                </div>
                <RiArrowDownWideFill/>
            </div>
            <div className={classNames(
                userMenu,
                {[openMenu]: isOpen}
            )}>
                <h1>Thông tin tài khoản</h1>
                <DoubledLine/>
                <div className={linkWrapper}>
                    <h2 className={linkUserName}>{authUser?.name ?? 'Un'}</h2>
                    <Link to={'/user'}>Tài khoản của bạn</Link>
                    <Link>Danh sách địa chỉ</Link>
                    <Link>Đơn hàng đã mua</Link>
                    <Link onClick={e => handleLogout(e)}>Đăng xuất</Link>
                </div>
            </div>
       </div>
    )
}