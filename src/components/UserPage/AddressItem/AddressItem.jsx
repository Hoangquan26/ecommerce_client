import React, { useState } from 'react'
import styles from './styles.module.scss'
import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import classNames from 'classnames';
import { toast } from 'react-toastify';
import AlertToast from '../../Toast/AlertToast/AlertToast';
import AddressField from '../AddressField/AddressField';

const TIME_OUT = 10000
export default function AddressItem({isDefault, name, address, phoneNumber, businessName, addressId}) {
    const [isEdit, setIsEdit] = useState(false)
    const [canDelete, setCanDelete] = useState(true)
    const toggleEdit = () => {
        setIsEdit(prev => !prev)
    }
    const disableBtn = () => {
        setTimeout(() => {
            setCanDelete(true)
        }, TIME_OUT)
    }
    const handleAlert = ({addressId}) => {
        setCanDelete(false)
        disableBtn()
        toast(<AlertToast message="Confirm deleting the address?"/>, {
            position: 'top-right',
            autoClose: TIME_OUT,
            type: "warning",
            message:"Confirm deleting the address?",
            pauseOnHover: false
        });
    };

    const { container, containerHeader, title, defaultAddress, containerContent, contentName, actionWrapper, contentItem, actionBtn } = styles
    return (
    <div className={classNames(container, {
        [defaultAddress]: isDefault
    })}>
        <div className={containerHeader}>
            <h4 className={classNames(title)}>{name}{isDefault && "(Địa chỉ mặc định)"}</h4>
            <div className={actionWrapper}>
                <button className={actionBtn} onClick={toggleEdit}><FaRegEdit/></button>
                <button className={actionBtn} disabled={!canDelete} onClick={() => handleAlert({addressId})}><IoClose/></button>
            </div>
        </div>
        <div className={containerContent}>
        {
            !isEdit ?<>
                <h5 className={contentName}>{name}</h5>
                <div className={contentItem}>
                    <span>Company:</span>
                    <span>{businessName}</span>
                </div>
                <div className={contentItem}>
                    <span>Address:</span>
                    <span>{address}</span>
                </div>
                <div className={contentItem}>
                    <span>Phone number:</span>
                    <span>{phoneNumber}</span>
                </div> 
            </>:
            <AddressField isDefault={isDefault} name={name} address={address} 
            phoneNumber={phoneNumber} businessName={businessName} addressId = {addressId}/>
        }
        </div> 

    </div>
  )
}
