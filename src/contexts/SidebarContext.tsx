import React, { useCallback, useState } from "react";

const SidebarContext = React.createContext<SidebarContext>({
    isClose: true,
    closeSidebar() {
    },
    openSidebar() {

    },
    toggle() {

    },
})

export const useSidebar = () => React.useContext(SidebarContext)


const SidebarProvider = ({ children }: ContextProviderProps) => {
    const [isClose, setIsClose] = useState<boolean>(true)

    const closeSidebar = useCallback(() => {
        setIsClose(true)
    }, [isClose])

    const openSidebar = useCallback(() => {
        setIsClose(false)
    }, [isClose])

    return (
        <SidebarContext.Provider value={{ isClose, closeSidebar, openSidebar, toggle: () => setIsClose(prev => !prev) }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider