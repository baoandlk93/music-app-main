import React from 'react'
import Hero from '../../components/Hero/Hero'
import Wrapper from '../../components/Wrapper/Wrapper'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import TrackListItem from '../../components/TrackListItem/TrackListItem'
import { RiLoader3Fill } from 'react-icons/ri'
import MainContentWrapper from '../../components/MainContentWrapper/MainContentWrapper'

type Props = {}

const GenresDetail = (props: Props) => {
    return (
        <MainContentWrapper heroClass='bg-hero'>
            <div className='mt-24'>
                <div className='text-[32px] mb-4 text-dark font-roboto font-bold'>Remix</div>
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
        </MainContentWrapper>

    )
}

export default GenresDetail