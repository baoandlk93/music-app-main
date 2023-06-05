import classNames from 'classnames'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { RiHeartLine, RiLoginCircleLine, RiLogoutCircleLine, RiMenu3Line, RiSearch2Line, RiSettingsLine, RiUser3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useSidebar } from '../../contexts/SidebarContext'
import { useAuth } from '../../contexts/AuthContext'
import configs from '../../services/apiConfig'
import createAvatarUrl from '../../utils/createAvatarUrl'

type Props = {}

const Header = (props: Props) => {
    const sidebar = useSidebar()
    return (
        <header className={classNames(`
            fixed top-0 left-0 w-full  py-4 z-[2]
            lg:right-0 lg:left-auto
            lg:w-[calc(100%_-_var(--close-sidebar-width))] [&.side-open]:lg:w-[calc(100%_-_var(--sidebar-width))]
        `, { "side-open": !sidebar.isClose })}>
            <Wrapper>
                <div className='bg-primary text-white px-6 py-2 rounded'>
                    <div className='flex items-center gap-x-4'>
                        <button className='text-2xl lg:hidden' onClick={() => sidebar.openSidebar()}>
                            <RiMenu3Line />
                        </button>
                        <div className='flex items-center grow basis-0 min-w-0'>
                            <span className='text-2xl'><RiSearch2Line /></span>
                            <input className='
                                bg-transparent outline-none border-none
                                ml-2 placeholder:text-white text-[13px]
                                w-full
                            'type="text" placeholder='Type any to get result...' />
                        </div>

                        {/* user menu */}
                        <UserMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

const UserMenu = () => {
    const auth = useAuth()
    const [activeDrop, setActiveDrop] = useState<boolean>(false)
    const dropRef = useRef<HTMLDivElement>(null)

    const avatar = useMemo(() => {
        return createAvatarUrl(auth.auth?.profile?.display_name || "N/A")
    }, [auth.auth])

    // handle click outside
    useEffect(() => {

        const handleClickOutside = (e: any) => {
            if (!dropRef.current) return
            if (!dropRef.current.contains(e.target)) {
                setActiveDrop(false)
            }

        }

        window.addEventListener("click", handleClickOutside)

        return () => {
            window.removeEventListener("click", handleClickOutside)
        }
    }, [])

    const handleLogin = () => {
    }


    if (!auth.isAuthenticated()) {
        return (
            <button className="flex items-center" onClick={handleLogin}>
                <RiLoginCircleLine className='text-xl' />
                <span className="text-sm ml-1 font-semibold">Login</span>
            </button>
        )
    }

    return (
        <div ref={dropRef} className={classNames('relative group', { active: activeDrop })}>
            <div className='flex items-center cursor-pointer' onClick={() => setActiveDrop(prev => !prev)}>
                <img className='rounded-full w-8 h-8 object-cover'
                    src={auth.auth?.profile?.images && auth.auth.profile.images.length > 0 ? auth.auth?.profile?.images[0].url : avatar}
                    alt={auth.auth?.profile?.display_name || "avatar"} />
                <span className='pl-2 text-sm hidden xs:inline'>{auth.auth?.profile?.display_name || "N/A"}</span>
            </div>
            {/* drop content */}
            <div className='hidden group-[.active]:block absolute top-[calc(100%_+_4px)] right-0 text-body-color bg-white shadow-md w-[224px] rounded-md py-2'>
                {/* user name */}

                <div className='flex px-4 py-2 items-center gap-x-3'>
                    <img className='w-12 h-12 rounded-full object-cover'
                        src={auth.auth?.profile?.images && auth.auth.profile.images.length > 0 ? auth.auth?.profile?.images[0].url : avatar}
                        alt={auth.auth?.profile?.display_name || "avatar"} />
                    <div className='w-[calc(100%_-_3rem)]'>
                        <div className='text-sm font-medium text-color-text'>{auth.auth?.profile?.display_name || "N/A"}</div>
                        <div className='text-[13px] text-[#737578] w-full text-ellipsis whitespace-nowrap overflow-hidden'>{auth.auth?.profile?.email || ""}</div>
                    </div>
                </div>

                {/* user option */}
                <div className='w-full border-t border-[#eff2f5] my-2'></div>
                <Link to={"#"} className='flex gap-x-2 py-1.5 px-4 hover:bg-[#eff2f5] transition-all duration-300'>
                    <RiUser3Line className='text-xl' />
                    <span className='text-sm'>Profile</span>
                </Link>
                <Link to={"#"} className='flex gap-x-2 py-1.5 px-4 hover:bg-[#eff2f5] transition-all duration-300'>
                    <RiHeartLine className='text-xl' />
                    <span className='text-sm'>Favorites</span>
                </Link>
                <Link to={"#"} className='flex gap-x-2 py-1.5 px-4 hover:bg-[#eff2f5] transition-all duration-300'>
                    <RiSettingsLine className='text-xl' />
                    <span className='text-sm'>Settings</span>
                </Link>
                <Link to={"#"} className='flex gap-x-2 py-1.5 px-4 hover:bg-[#eff2f5] transition-all duration-300'>
                    <RiUser3Line className='text-xl' />
                    <span className='text-sm'>Profile</span>
                </Link>
                {/* user logout */}
                <div className='w-full border-t border-[#eff2f5] my-2'></div>
                <Link to={"#"} className='flex gap-x-2 py-1.5 px-4 text-danger hover:bg-[#eff2f5] transition-all duration-300'>
                    <RiLogoutCircleLine className='text-xl' />
                    <span className='text-sm'>Logout</span>
                </Link>
            </div>
        </div>
    )
}

export default Header