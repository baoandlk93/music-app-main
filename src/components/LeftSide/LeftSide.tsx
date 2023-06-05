import classNames from 'classnames'
import React, { useState } from 'react'
import { RiMenu3Fill, RiHome4Line, RiDiscLine, RiMusic2Line, RiAlbumLine, RiMicLine, RiPieChartLine, RiHeartLine, RiHistoryLine, RiMenuLine, RiMenuFoldLine, RiPlayListFill } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { useSidebar } from '../../contexts/SidebarContext'
type Props = {}

const LeftSide = (props: Props) => {
    const sidebar = useSidebar()

    return (
        <aside className={classNames(`
            fixed top-0 left-0 h-screen bg-bg-sidebar w-[var(--sidebar-width)] text-body-color overflow-hidden
            flex flex-col
            z-[10]
            lg:[&.close]:w-[var(--close-sidebar-width)]
            transition-all duration-300
            group
            [&.close]:-left-full 
            lg:[&.close]:-left-0 
        `, { "close": sidebar.isClose })}>
            <div className='flex items-center justify-between lg:group-[.close]:justify-center px-4 pt-6 pb-12 max-h-[116px]'>
                <Link to={"#"} className='lg:group-[.close]:hidden'> <img className='w-[104px]' src="/images/logo.svg" alt="logo" /></Link>
                <button className='text-2xl' onClick={() => sidebar.toggle()}>
                    <RiMenu3Fill className='hidden lg:block lg:group-[.close]:hidden ' />
                    <RiMenuLine className='hidden lg:group-[.close]:block' />
                    <RiMenuFoldLine className='block lg:hidden' />
                </button>
            </div>
            <div className='h-[calc(100%_-_116px)] w-full'>
                <SideOption isClose={sidebar.isClose} icon={<RiHome4Line className='text-xl' />} title='Home' to='/' />
                <SideOption isClose={sidebar.isClose} icon={<RiDiscLine className='text-xl' />} title='Genres' to='/genres' />
                <SideOption isClose={sidebar.isClose} icon={<RiMicLine className='text-xl' />} title='Artists' to='/artists' />
                <div className='text-[#8c9095] px-6 pt-6 pb-4 font-medium text-sm w-full'>
                    <span className='lg:group-[.close]:hidden'>Music</span>
                    <span className='hidden text-base  text-center lg:group-[.close]:inline'>...</span>
                </div>
                <SideOption isClose={sidebar.isClose} icon={<RiPlayListFill className='text-xl' />} title='playlist' to='/playlist' />
                <SideOption isClose={sidebar.isClose} icon={<RiHeartLine className='text-xl' />} title='Favorites' to='/favorites' />
                <SideOption isClose={sidebar.isClose} icon={<RiHistoryLine className='text-xl' />} title='History' to='/history' />
            </div>
        </aside>
    )
}


interface SideOptionProps {
    icon: React.ReactNode,
    title: string,
    to: string,
    isClose?: boolean
}

const SideOption = ({ icon, title, to, isClose }: SideOptionProps) => {
    return (
        <NavLink to={to} className={({ isActive }) => classNames(`
        flex w-full items-center text-on-sidebar [&.active]:text-primary text-sm px-6 py-[10px] gap-x-4 relative
        before:content-none before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary [&.active]:before:content-[""]
        [&.active]:bg-gradient-to-r [&.active]:from-0 [&.active]:to-100% [&.active]:from-[rgba(25,110,237,.1)] [&.active]:to-[rgba(25,110,237,0)]
        group
       `, { active: isActive, close: isClose })}>
            {icon}
            <span className='font-medium lg:group-[.close]:hidden'>{title}</span>
        </NavLink>
    )
}

export default LeftSide