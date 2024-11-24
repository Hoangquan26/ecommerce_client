import axios from "axios";
import { BASE_URL, DEFAULT_HEADER } from "../configs/api.config";

const defaultApi = axios.create({
    baseURL: BASE_URL,
    ...DEFAULT_HEADER
})

defaultApi.interceptors.response.use((response) => response.data)

export {
    defaultApi
}