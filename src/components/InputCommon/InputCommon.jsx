import { useState } from 'react';
import styles from './styles.module.scss'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
export default function InputCommon({label, id, isRequired = false,  type = 'text', ...props}){
    const { container, labelWrapper, inputWrapper, hintPassword, errorMessage } = styles
    const [isHint, setIsHint] = useState(false) 
    const {formik} = props
    const toggleHint = () => {
        setIsHint(prev => !prev)
    }
    const isError = formik.touched[id] && formik.errors[id]
    const errorMsg = formik.errors[id]
    const isPassword = type === 'password'
    return <div className={container}>
        <label className={labelWrapper}>{label} {isRequired && <span>*</span>}</label>
        <div className={inputWrapper}>
            <input 
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            value={formik.values[id]}
            id={id} autoComplete='new-password' type={isHint ? 'text' : type} {...props}></input>
            {
                isPassword &&
                <div className={hintPassword} onClick={toggleHint}>
                    {
                        !isHint ? 
                        <IoEyeOutline/> : 
                        <IoEyeOffOutline/>
                    }
                </div>
            }

            {
                isError && <span className={errorMessage}>{errorMsg}</span>
            }
        </div>
    </div>
}