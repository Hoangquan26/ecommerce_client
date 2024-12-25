import SideHeader from '@components/SideHeader/SideHeader'
import InputCommon from '../../InputCommon/InputCommon'
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useContext, useEffect, useState } from 'react'
import AccessService from '../../../services/access.service'
import { useLoginMutation, useRegisterMutation } from '../../../features/authSlice.api'
import { useDispatch } from 'react-redux'
import { setCredential } from '../../../features/authSlice'
import { toast } from 'react-toastify'
import { TIME_OUT } from '../../../configs/api.config'
import { SidebarContext } from '../../../contexts/SidebarContext.Provider'
export default function SideAccess(){
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    const dispatch = useDispatch()
    const { container, form, checboxWrapper } = styles 
    const [ isLogin, setIslogin ] = useState(true)
    const [loginApi, {isError: loginIsError, isLoading: loginIsLoading, isSuccess: loginIsSuccess, error: loginError, data: loginData}] = useLoginMutation()
    const [registerApi,  {isError: registerIsError, isLoading: registerIsLoading, isSuccess: registerIsSuccess, error: registerError, data: registerData}] = useRegisterMutation()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            cfPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().
            max(50, 'Must be less than 50 character').
            required('Username can\'t be blank'),
            password: Yup.string().
            max(50, 'Must be less than 50 character'),
            cfPassword: Yup.string().oneOf([Yup.ref('password'), null], 
            'Passwords must match'),

        }),
        onSubmit: async(req) => {
            let response = {}
            const loadingToast = toast.loading('Processing...', {
                position: 'top-right',
                autoClose: TIME_OUT,
                closeButton: true
            });
            try {
                if (isLogin) {
                    response = await loginApi(req);
                    if (response?.data) {
                        dispatch(setCredential({
                            accessToken: response.data.metadata.tokens.accessToken,
                            user: response.data.metadata.user,
                        }));
                        toast.update(loadingToast, { 
                            render: 'Login successful!', 
                            type: 'success', 
                            isLoading: false, 
                            autoClose: 3000 
                        })
                        setIsOpen(false)
                    } else {
                      
                        throw new Error(response?.error?.data?.message || 'Login failed');
                    }
                } else {
                    response = await registerApi(req);
                    if (response?.data) {
                        toast.update(loadingToast, { 
                            render: 'Register successful!', 
                            type: 'success', 
                            isLoading: false, 
                            autoClose: 3000 
                        })

                    } else {
                        throw new Error(response?.error?.data?.message  || 'Registration failed');
                    }
                }
            }
            catch(err) {
                console.log(err.message)
                toast.update(loadingToast, { 
                    render: err.message, 
                    type: 'error', 
                    isLoading: false, 
                    autoClose: 3000 
                });
            }
        }
    })
    
    const toggleForm = () => {
        setIslogin(prev => !prev)
        formik.resetForm()
    }

    return <div className={container}>
        <SideHeader content={'Login'}/>
        <form className={form} onSubmit={formik.handleSubmit} >

            <InputCommon formik={formik} id={'email'} label={'Email'} isRequired={true}/>

            <InputCommon formik={formik} id={'password'} label={'Password'} type={'password'} isRequired={true}/>
            {
                isLogin &&
                <div className={checboxWrapper}>
                    <input id='rememberMe' onChange={formik.handleChange} value={formik.values.rememberMe} type="checkbox"/>
                    <span>Remember me</span>
                </div>
            }

            {
                !isLogin && 
                <>
                    <InputCommon formik={formik} id={'cfPassword'} label={'Confirm Password'} type={'password'} isRequired={true}/>
                </>
            }

            <Button style={{fontSize: '14px'}} content={isLogin ? 'Login' : 'Register'} type={'submit'}/>
            <Button style={{fontSize: '14px'}} onClick={toggleForm} content={isLogin ? 'Don\'t have a acount?' : 'Already have a account?'} type='button' isPrimary={false}/>
        </form>
    </div>
}