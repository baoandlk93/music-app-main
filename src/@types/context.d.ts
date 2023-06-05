
interface ContextProviderProps {
    children: any
}
interface SidebarContext {
    isClose: boolean,
    closeSidebar: () => void
    openSidebar: () => void,
    toggle: () => void
}

// auth context define
interface AuthState {
    isLogged: boolean,
    profile: AuthProfile | null
}

interface AuthContext {
    auth: AuthState | null,
    login: (token: string) => Promise<any>,
    logout: () => void,
    isAuthenticated: () => boolean

}