import classNames from 'classnames'
import React, { useState } from 'react'
import { RiCloseLine, RiHeartLine, RiMoreFill, RiPlayFill, RiPlayListFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type Props = { active?: boolean }

const PlayList = ({ active }: Props) => {

    return (
        <div className={classNames(' group z-[2]  w-full xs:w-3/4  absolute right-0 bottom-[120%]', { active })}>
            <div className='
                             group-[.active]:flex sm:bottom-0 
                            h-[450px]  hidden flex-col bg-white rounded-md shadow-md'>
                {/* header */}
                <div className='flex items-center justify-between px-4 py-4'>
                    <span className='text-dark font-bold font-roboto'>Next Lineup</span>
                    <button className='
                      text-primary uppercase text-xs pb-0.5 font-semibold relative overflow-hidden
                        after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary
                        before:content-[""] before:absolute before:bottom-0 before:-left-full before:w-full before:h-0.5 before:bg-white/70 before:z-[1]
                        before:transition-all before:duration-300 before:ease-in
                        hover:before:left-full
                      '>
                        clear
                    </button>
                </div>

                {/* list track */}
                <div className='py-2 px-1 xs:px-4 overflow-y-auto h-[calc(100%_-_56px)]  playlist'>
                    {
                        new Array(10).fill(0).map((_, index) => {
                            return (
                                <PlayListItem key={index.toString()} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const PlayListItem = () => {
    return (
        <div className='w-full flex items-center p-2 hover:bg-bg-sidebar transition-all duration-300 rounded-lg '>
            <div className='flex  grow basis-0 items-center w-[80%]'>
                <div className='relative w-12 h-12 group'>
                    <img className=' w-full h-full object-cover rounded-lg' src="/images/recent-2.jpg" alt="album" />
                    <button className='absolute hidden  group-hover:flex items-center justify-center rounded-full w-8 h-8 bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                        <RiPlayFill className='text-2xl text-dark' />
                    </button>
                </div>
                <div className=' px-4 w-[calc(100%_-_3rem)] grow basis-0'>
                    <Link to={"#"}>
                        <div className='text-sm text-dark font-medium overflow-hidden text-ellipsis whitespace-nowrap'>Mummy </div>
                        <div className='text-[13px] text-[#8c9095] overflow-hidden text-ellipsis whitespace-nowrap'>Arebica Luna</div>
                    </Link>
                </div>

            </div>
            <div className='flex w-[20] justify-end gap-x-2 items-center'>
                <button className='text-xl'><RiHeartLine /></button>
                <button className='text-xl'><RiCloseLine /></button>
            </div>
        </div>
    )
}

export default PlayList