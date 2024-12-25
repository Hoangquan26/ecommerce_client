import { defaultApi, privateApi } from '@apis/api.axios.js'
import { ENDPOINT } from '@configs/api.config'

const AccessService = {
    register: async(body) => {
        const {email, password} = body
        const response = await privateApi.post(ENDPOINT.ACCESS.register, {
            email, password
        })

        return response
    },
    login: async(body) => {
        const {email, password} = body
        const response = await privateApi.post(ENDPOINT.ACCESS.login, {
            email, password
        })
        return response
    }
}


export default AccessService