import { useFormik } from 'formik'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import InputCommon from '@components/InputCommon/InputCommon'
import CheckboxCommon from '../../CheckboxCommon/CheckboxCommon'
import Button from '@components/Button/Button'
export default function AddressField({name = '', address = '', businessName = '', phoneNumber = '', addressId = '', isDefault = false, userId = null, type = 'update'}) {
    const [isUpdate, setIsUpdate] = useState(type === 'update')
    const { inputWrapper, container } = styles
    const formik = useFormik({
        initialValues: {
            name,
            address,
            businessName,
            phoneNumber,
            addressId,
            isDefault,
        },
        onSubmit: (data) => {
            console.log(data)
            // handle update
        }
    })

    return (
    <form className={container} onSubmit={formik.handleSubmit}>
        <div className={inputWrapper}>
            <InputCommon label={"Name"} id={"name"} isRequired={true} formik={formik}/>
            <InputCommon label={"Address"} id={"address"} isRequired={true} formik={formik}/>
            <InputCommon label={"Phone number"} id={"phoneNumber"} isRequired={true} formik={formik}/>
            <InputCommon label={"Company name"} id={"businessName"} formik={formik}/>
            <CheckboxCommon label={"Select as default address"} id={"isDefault"} formik={formik}/>
            <Button content={'Apply'} type="submit"></Button>
        </div>
    </form>
  )
}
