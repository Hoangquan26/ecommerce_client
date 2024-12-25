import { useContext } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { SidebarContext } from '../../contexts/SidebarContext.Provider'

import { AiOutlineClose } from 'react-icons/ai'
import { sideElement } from './constant'


export default function Sidebar() {
    const {container, overlay, side, slideBar, boxIcon} = styles
    const  { isOpen, setIsOpen, type } = useContext(SidebarContext)

    const hideSidebar = () => {
        setIsOpen(false)
    }
    return <div className={container}>
        <div 
        onClick={hideSidebar}
        className={classNames({
            [overlay]: isOpen
        })}></div>
        <div className={classNames(side, {
            [slideBar]: isOpen
        })}>
            {
                isOpen && 
                <div className={boxIcon} onClick={hideSidebar}>
                    <AiOutlineClose/>
                </div>
            }

            {
                type && sideElement[type]
            }
        </div>
    </div>
}