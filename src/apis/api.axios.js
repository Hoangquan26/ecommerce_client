import axios from "axios";
import { BASE_URL, DEFAULT_HEADER, PRIVATE_HEADER } from "../configs/api.config";

const defaultApi = axios.create({
    baseURL: BASE_URL,
    ...DEFAULT_HEADER
})

const privateApi = axios.create({
    baseURL: BASE_URL,
    ...PRIVATE_HEADER
})

privateApi.interceptors.response.use((response) => response.data)
defaultApi.interceptors.response.use((response) => response.data)

const TIMEOUT = 10000
export {
    defaultApi,
    privateApi,
    TIMEOUT
}