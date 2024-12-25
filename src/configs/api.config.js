const TIME_OUT = 10000

const DEFAULT_HEADER = {
    timeout: TIME_OUT,
    'Content-Type': 'application/json'
}

const PRIVATE_HEADER = {
    ...DEFAULT_HEADER,
    credential: 'include'
}

const ENDPOINT = {
    PRODUCT: {
        getAllProduct: '/product'
    },
    ACCESS: {
        register: '/access/register',
        login: '/access/login',
        logout: '/access/logout',
        refresh: '/access/refresh'
    }
}

const BASE_URL = import.meta.env.VITE_SERVER_URL

export {
    DEFAULT_HEADER,
    BASE_URL,
    TIME_OUT,
    ENDPOINT,
    PRIVATE_HEADER
}