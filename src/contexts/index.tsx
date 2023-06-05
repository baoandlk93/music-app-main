import React from 'react'
import SidebarProvider from './SidebarContext'
import AuthProvider from './AuthContext'

const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <AuthProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </AuthProvider>

    )
}


export default ContextProvider