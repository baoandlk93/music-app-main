import React from 'react'
import { RiMoreFill, RiPlayFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type Props = {}

const TrackListItem = (props: Props) => {
    return (
        <div className='w-full flex items-center p-2 hover:bg-bg-sidebar transition-all duration-300 rounded-lg '>
            <div className='flex  grow basis-0 items-center'>
                <div className='relative w-12 h-12 group'>
                    <img className=' w-full h-full object-cover rounded-lg' src="/images/recent-2.jpg" alt="album" />
                    <button className='absolute hidden  group-hover:flex items-center justify-center rounded-full w-8 h-8 bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                        <RiPlayFill className='text-2xl text-dark' />
                    </button>
                </div>
                <div className='ml-4 grow basis-0'>
                    <Link to={"#"}>
                        <div className='text-sm font-medium text-dark'>Mummy</div>
                        <div className='text-[13px] text-[#8c9095]'>Arebica Luna</div>
                    </Link>
                </div>

            </div>
            <div className='flex gap-x-4 items-center'>
                <span className='text-sm'>03:24</span>
                <button className='text-2xl'><RiMoreFill /></button>
            </div>
        </div>
    )
}

export default TrackListItem