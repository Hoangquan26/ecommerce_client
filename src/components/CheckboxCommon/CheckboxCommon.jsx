import React from 'react'
import styles from './styles.module.scss'
export default function CheckboxCommon({id, formik, label, ...props}) {
    const { container } = styles
    return (
        <div className={container}>
            <input id={id} onChange={formik.handleChange} value={formik.values[id]} type='checkbox' {...props}></input>
            <label>{label}</label>
        </div>
    )
}
