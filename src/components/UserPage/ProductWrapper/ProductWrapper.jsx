import React from 'react'
import ProductItem from '@components/SidebarContent/ProductItem/ProductItem'
import styles from './styles.module.scss'
export default function ProductWrapper() {
  const {container, title} = styles 
  return (
    <div className={container}>
        <h3 className={title}>You haven't purchased any products yet</h3>
    </div>
  )
}
