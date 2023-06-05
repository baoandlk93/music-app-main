import axios, { AxiosError } from "axios";
import configs from "./apiConfig";
import apiService from "./apiServices";
import { TOKEN_STORE_KEY } from "../data/constants";
import { excludeUrl } from "../data/data";

const axiosInstance = axios.create({
    baseURL: configs.base_url,
    headers: {
        "Content-Type": "application/json"
    }

})

axiosInstance.interceptors.request.use((config) => {
    if (config.headers.Authorization) return config

    const data = localStorage.getItem(TOKEN_STORE_KEY)
    if (!data || !(JSON.parse(data))) return config
    const tokens = (JSON.parse(data) as TokenStorage)
    if (!tokens.access_token) return config

    config.headers.Authorization = `${tokens.token_type} ${tokens.access_token}`
    return config

})

axiosInstance.interceptors.response.use(response => response, async (error: AxiosError) => {
    const originalRequest = error.config;
    const statusCode = error.response?.status

    if (statusCode === 401 && originalRequest && !originalRequest?._retry && !excludeUrl.includes(`${originalRequest.baseURL}${originalRequest.url}`)) {

        const data = localStorage.getItem(TOKEN_STORE_KEY)
        if (!data || !(JSON.parse(data))) return Promise.reject(error)

        const tokens = (JSON.parse(data) as TokenStorage)
        if (!tokens.refresh_token) return Promise.reject(error)

        try {
            let refreshTokenRes = await apiService.auth.refreshToken(tokens.refresh_token)
            tokens.access_token = refreshTokenRes.data.access_token
            tokens.token_type = refreshTokenRes.data.token_type
            localStorage.setItem(TOKEN_STORE_KEY, JSON.stringify(tokens))
            originalRequest.headers.Authorization
            const config = { ...originalRequest, headers: { Authorization: `${tokens.token_type} ${tokens.access_token}` } }
            return axiosInstance(config)
        } catch (error) {
            return Promise.reject(error)
        }

    }

    return Promise.reject(error)


})

export default axiosInstance