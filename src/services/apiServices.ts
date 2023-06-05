import axiosInstance from "./axiosInstance"
import configs from "./apiConfig"
import axios, { AxiosRequestConfig } from "axios"

const apiService = {
    album: {
        getNewRelease: (params?: { offset: number, limit: number }) => {
            return axiosInstance.get("/browse/new-releases", {
                params: { ...params }
            })
        }
    },
    chart: {

    },
    artist: {

    },
    track: {
        getInternationalTrack: () => {

        },
        getPopularToday: async (params?: { offset: number, limit: number }) => {
            return axiosInstance.get<{ playlists: { items: PlayList[] } }>("browse/categories/toplists/playlists")
        },
        getRecentTrack: () => {
            return axiosInstance.get<RecentTrackResponse>("/me/player/recently-played")
        },
    },

    auth: {
        getToken: (code: string) => {
            return axios.post<TokenResponse>("https://accounts.spotify.com/api/token", {
                grant_type: "authorization_code",
                code: code,
                redirect_uri: `${import.meta.env.VITE_WEB_URL}/auth`,
                client_id: configs.client_id,
                client_secret: configs.client_secret
            }, { headers: { "Content-Type": 'application/x-www-form-urlencoded' } })
        },
        refreshToken: (refresh_token: string) => {
            return axios.post<RefreshTokenResponse>('https://accounts.spotify.com/api/token', {
                client_id: configs.client_id,
                client_secret: configs.client_secret,
                grant_type: "refresh_token",
                refresh_token: refresh_token
            }, { headers: { "Content-Type": 'application/x-www-form-urlencoded' } })
        },
        getProfile: (configs?: AxiosRequestConfig) => {
            return axiosInstance.get<AuthProfile>("me", configs)
        }
    }
}


export default apiService