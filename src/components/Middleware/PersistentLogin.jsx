import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCredential, userSelector } from '../../features/authSlice'
import { useRefreshMutation } from '@/features/authSlice.api'
import Loading from '@components/Loading/Loading'
import { Outlet } from 'react-router'
export default function PersistentLogin() {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const authUser = useSelector(userSelector)
    const [refresh] = useRefreshMutation()
    useEffect(() => {
        const verifyRefreshToken = async() => {
            try {
                const res = await refresh()
                if(res?.data?.status == 'success') {
                    dispatch(setCredential({accessToken: res?.data?.metadata?.tokens?.accessToken, user:  res?.data?.metadata?.user}))
                }
            }
            catch(e) {
                console.log(e)
            }
            finally {
                setIsLoading(false)
            }
        }

        !authUser ? verifyRefreshToken() : setIsLoading(false)
    }, [])
    return (
        <div>
            {
                isLoading ? 
                <Loading/> :
                <Outlet/>
            }
        </div>
    )
}
