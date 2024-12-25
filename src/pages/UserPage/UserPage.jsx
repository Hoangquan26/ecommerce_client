import React from 'react'
import styles from './styles.module.scss'
import CommonLine from '../../components/AdvancedTitle/CommonLine/CommonLine'
import UserSetting from '../../components/UserPage/UserSetting/UserSetting'
import classNames from 'classnames'
export default function UserPage() {
  const {container, contentWrapper, title, spaceBetween, line} = styles
  return (
    <div className={container}>
      <div className={contentWrapper}>
        <h1 className={classNames(title, spaceBetween)}>Your account</h1>
        <CommonLine/>

        <div className={spaceBetween}>
          <UserSetting/>
        </div>
      </div>  
    </div>
  )
}
