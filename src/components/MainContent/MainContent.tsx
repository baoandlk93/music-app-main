import classNames from 'classnames'
import React from 'react'
import { useSidebar } from '../../contexts/SidebarContext'

interface Props {
    children: any | any[]
}

const MainContent = (props: Props) => {
    const sidebar = useSidebar()

    return (
        <div className={classNames(`
        transition-all duration-300
        w-full lg:w-[calc(100%_-_var(--close-sidebar-width))] [&.side-open]:lg:w-[calc(100%_-_var(--sidebar-width))] h-100vh ml-auto`
            , { "side-open": !sidebar.isClose })}>
            {props.children}
        </div>
    )
}

export default MainContent