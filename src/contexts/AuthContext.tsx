import React, { useCallback, useState } from 'react'
import apiServices from '../services/apiServices'
import { AxiosResponse } from 'axios'
import { AUTH_STORE_KEY, TOKEN_STORE_KEY } from '../data/constants'


const AuthContext = React.createContext<AuthContext>({
    auth: null,
    login(token) {
        return new Promise((resolve, reject) => { })
    },
    logout() {

    },
    isAuthenticated() {
        return false
    },
})

export const useAuth = () => React.useContext(AuthContext)

let callGetSession: Promise<AxiosResponse<TokenResponse, any>> | null = null

export default function AuthProvider({ children }: ContextProviderProps) {

    // initial user state. if storage exist data then return stored data else return default
    const [authState, setAuthState] = useState<AuthState | null>(() => {
        const storeData = localStorage.getItem(AUTH_STORE_KEY)

        if (storeData && JSON.parse(storeData)) {
            return JSON.parse(storeData) as AuthState
        }

        return {
            isLogged: false,
            profile: null
        }

    })

    // handle user login
    const login = useCallback(async (token: string) => {
        try {
            //  if api was called then it would not call again
            callGetSession = callGetSession !== null ? callGetSession : apiServices.auth.getToken(token)

            let data = (await callGetSession).data

            let me = (await apiServices.auth.getProfile({
                headers: {
                    Authorization: `${data.token_type} ${data.access_token}`
                }
            })).data


            const authData: AuthState = {
                isLogged: true,
                profile: me
            }

            const tokens: TokenStorage = {
                access_token: data.access_token,
                refresh_token: data.refresh_token,
                token_type: data.token_type
            }

            localStorage.setItem(AUTH_STORE_KEY, JSON.stringify(authData))
            localStorage.setItem(TOKEN_STORE_KEY, JSON.stringify(tokens))

            setAuthState(authData)

            // reset call data
            callGetSession = null
            return Promise.resolve({})
        } catch (error: any) {
            callGetSession = null
            return Promise.reject(error)
        }

    }, [])

    // handle user logout
    const logout = useCallback(() => {
        const authData = {
            isLogged: false,
            profile: null
        }
        localStorage.setItem(AUTH_STORE_KEY, JSON.stringify(authData))
        localStorage.removeItem(TOKEN_STORE_KEY)
        setAuthState(authData)
    }, [])


    const isAuthenticated = useCallback(() => {
        const tokenStore = localStorage.getItem(TOKEN_STORE_KEY)
        if (!tokenStore || !JSON.parse(tokenStore)) return false
        const tokens = JSON.parse(tokenStore) as TokenStorage

        return authState?.isLogged && tokens.refresh_token !== null ? true : false
    }, [authState])

    return (
        <AuthContext.Provider value={{ auth: authState, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}