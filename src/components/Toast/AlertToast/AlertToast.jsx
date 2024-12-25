import React from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames';
export default function AlertToast({ closeToast, message, toastProps, action }) {
    const { container, btn, messageText, btnWrapper, actionBtn, title } = styles
    const handleAction = () => {
        closeToast()
        action && action()
    }
    return (
        <div className={container}>
            <p className={classNames(messageText, title)}>{message}</p>
      
            <div className={btnWrapper}>
                <button className={classNames(btn, actionBtn)} onClick={handleAction}>Accept</button>
                <button className={btn} onClick={closeToast}>Cancel</button>
            </div>
        </div>
    );
}
