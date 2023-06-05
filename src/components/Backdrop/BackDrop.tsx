import React from 'react'
import { useSidebar } from '../../contexts/SidebarContext'
import classNames from 'classnames'

type Props = {}

const BackDrop = (props: Props) => {
    const sidebar = useSidebar()

    return (
        <div onClick={() => sidebar.closeSidebar()} className={classNames('fixed lg:hidden z-[9] top-0 left-0 w-full h-full bg-black/70 backdrop-blur-[2px]', { "hidden": sidebar.isClose })}>

        </div>
    )
}

export default BackDrop