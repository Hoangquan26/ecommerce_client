import React from 'react'
import styles from './styles.module.scss'
import CommonLine from '@components/AdvancedTitle/CommonLine/CommonLine'
import { Link } from 'react-router'
import ProductWrapper from '../ProductWrapper/ProductWrapper'
export default function AccountInfo() {
const {container, title, main_content, commonText, main_content_wrapper, productWrapper} = styles
  return (
    <div className={container}>
        <div className={main_content_wrapper}>
            <h2 className={title}>Account Information</h2>
            <CommonLine/>
            <div className={main_content}>
                <h2 className={title}>Username</h2>
                <p className={commonText}>Email</p>
                <p className={commonText}>Vietnam</p>
                <Link className={commonText} to={''}>Xem địa chỉ</Link>
            </div>
        </div>
        
        <div className={productWrapper}>
            <ProductWrapper/>
        </div>
    </div>
  )
}
