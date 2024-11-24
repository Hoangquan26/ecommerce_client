const TIME_OUT = 10000

const DEFAULT_HEADER = {
    timeout: TIME_OUT
}

const ENDPOINT = {
    PRODUCT: {
        getAllProduct: '/product'
    }
}

const BASE_URL = 'https://be-project-reactjs.vercel.app/api/v1'

export {
    DEFAULT_HEADER,
    BASE_URL,
    TIME_OUT,
    ENDPOINT
}