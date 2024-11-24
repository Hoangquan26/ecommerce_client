import { defaultApi } from '@apis/api.axios.js'
import { ENDPOINT } from '@configs/api.config'
const ProductService = {
    getAllProduct: async() => {
        const response = await defaultApi.get(ENDPOINT.PRODUCT.getAllProduct)
        return response
    }
}


export default ProductService