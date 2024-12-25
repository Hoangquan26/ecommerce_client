import React, { useState } from 'react'
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import testData from './constant'
import AddressItem from '../AddressItem/AddressItem'
import AddressField from '../AddressField/AddressField'

export default function AccountAddress() {
    const { container, addressList, actionList, btnWrapper } = styles
    const [isCreate, setIsCreate] = useState(false)
    const toggleCreate = () =>{
        setIsCreate(prev => !prev)
    }
    return (
    <div className={container}>
        <div className={addressList}>
            {
                testData.length === 0 ? 
                <p>You haven't add any address yet</p> :
                testData.map((data, index) => (
                    <AddressItem addressId={index} isDefault={data.isDefault} key={index} address={data.address} phoneNumber={data.phoneNumber} name={data.name} businessName={data.businessName}/>
                ))
            }
        </div>
        
        <div className={actionList}>
            <div className={btnWrapper}>
                <Button onClick={toggleCreate} content={'ADD ADDRESS'}/>
            </div>
            {
                isCreate && <AddressField type={'create'}/>
            }
        </div>
    </div>
    )
}
