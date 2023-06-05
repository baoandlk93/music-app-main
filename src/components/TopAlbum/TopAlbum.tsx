import React from 'react'
import { RiHeartLine, RiMoreFill, RiVipCrownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type Props = {}

const TopAlbum = (props: Props) => {
    return (
        <div className='flex lg:flex-row flex-col gap-x-8 '>
            <div className='lg:w-2/4'>
                {
                    new Array(5).fill(0).map((_, index) => {
                        return <TopAlbumItem counter={index + 1} key={index.toString()} />
                    })
                }
            </div>
            <div className='lg:w-2/4'>
                {
                    new Array(5).fill(0).map((_, index) => {
                        return <TopAlbumItem counter={index + 6} key={index.toString()} />
                    })
                }
            </div>

        </div>
    )
}

interface TopAlbumItemProps {
    counter: number
}
const TopAlbumItem = ({ counter }: TopAlbumItemProps) => {
    return (

        <div className='w-full flex items-center p-2 hover:bg-bg-sidebar transition-all duration-300 rounded-lg '>
            <span className='pl-2 text-base font-semibold text-body-color w-10'>{counter}</span>
            <Link to={"#"} className='flex  grow basis-0 items-center'>
                <img className='w-16 h-16 rounded-lg' src="/images/recent-2.jpg" alt="album" />
                <div className='ml-4'>
                    <div className='text-sm text-dark'>Mummy</div>
                    <div className='text-[13px] text-[#8c9095]'>Arebica Luna</div>
                </div>

            </Link>
            <div className='flex gap-x-4 items-center'>
                <span className='w-6 h-6 rounded-full flex items-center justify-center text-white text-sm bg-[#00dee3]'><RiVipCrownFill /></span>
                <button className='text-2xl'><RiHeartLine /></button>
                <button className='text-2xl'><RiMoreFill /></button>
            </div>
        </div>
    )
}

export default TopAlbum