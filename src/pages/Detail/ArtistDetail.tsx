import React from 'react'
import Hero from '../../components/Hero/Hero'
import Wrapper from '../../components/Wrapper/Wrapper'
import { RiHeartLine, RiLoader3Fill, RiMoreFill, RiPlayFill, RiVipCrownFill } from 'react-icons/ri'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import { Link } from 'react-router-dom'
import TrackListItem from '../../components/TrackListItem/TrackListItem'
import SlideList from '../../components/SliceList/SlideList'
import MainContentWrapper from '../../components/MainContentWrapper/MainContentWrapper'

type Props = {}

const ArtistDetail = (props: Props) => {
    return (
        <MainContentWrapper heroClass='bg-artist-hero'>
            <div className='-mt-12 mb-8 flex flex-col md:flex-row relative z-[1] gap-16'>
                <div className='md:w-1/4 max-w-[400px] md:max-w-none w-full mx-auto text-center'>
                    <img src="/images/detail.jpg" alt="detail" className='w-full object-cover rounded-2xl' />
                </div>
                <div className='md:w-[calc(100%_-_25%_-_64px)] '>
                    <div className='flex items-start justify-between'>
                        <span className='text-dark text-2xl font-semibold mb-2'>Karen jennings</span>
                        <button className='text-2xl text-body-color'><RiMoreFill /></button>
                    </div>
                    <ul className='flex text-body-color text-sm gap-x-2 capitalize mb-4'>
                        <li>10 Album</li>
                        <li className='before:content-["\2022"] before:mr-2'>245 songs</li>
                        <li className='before:content-["\2022"] before:mr-2'>Apr 1, 1990</li>
                    </ul>
                    <div className='mb-12 text-body-color text-sm'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolorem maxime libero vero blanditiis distinctio exercitationem aperiam praesentium omnis, expedita, beatae adipisci quos eius ipsam voluptatibus id! Repellendus, harum excepturi.
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <FeatureTitle darkWord='Top ' primaryWord='Songs' />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 '>
                    {
                        new Array(10).fill(0).map((_, index) => {
                            return (
                                <TrackListItem key={index.toString()} />
                            )
                        })
                    }

                </div>
                <div className='flex items-center justify-center mt-12'>
                    <button className='flex items-center justify-center bg-primary gap-2 text-white px-4 py-2 rounded-lg'>
                        <span className='text-2xl'><RiLoader3Fill /></span>
                        <span className='text-sm font-medium'>Load more</span>
                    </button>
                </div>
            </div>

            <div className='mt-12'>
                <div className='relative  mb-8'>
                    <h3 className='flex items-center'>
                        <div className='grow basis-0 text-[28px] font-bold capitalize'>
                            <span className='text-dark font-roboto'>Top </span>
                            <span className='text-primary'>Albums</span>
                        </div>
                    </h3>
                </div>
                <SlideList />
            </div>
        </MainContentWrapper>

    )
}

export default ArtistDetail