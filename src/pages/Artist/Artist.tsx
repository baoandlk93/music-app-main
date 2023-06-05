import React from 'react'
import Hero from '../../components/Hero/Hero'
import Wrapper from '../../components/Wrapper/Wrapper'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import { Link } from 'react-router-dom'
import { RiLoader3Fill } from 'react-icons/ri'
import MainContentWrapper from '../../components/MainContentWrapper/MainContentWrapper'

type Props = {}

const Artist = (props: Props) => {
    return (
        <MainContentWrapper heroClass='bg-artist-hero'>
            <div className='mt-24'>
                <FeatureTitle darkWord='top ' primaryWord='artists' />
                <div className='grid  sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:grid-cols-6 gap-6 '>
                    {
                        new Array(18).fill(0).map((_, index) => {
                            return (
                                <ArtistItems key={index.toString()} />
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

const ArtistItems = () => {
    return (
        <div className='w-full'>
            <Link to={"#"}>
                <img className='w-full rounded-xl' src="/images/art-7.jpg" alt="artist" />
                <div className='text-dark text-sm font-semibold mt-2'>
                    Arebica Luna
                </div>
            </Link>
        </div>
    )
}

export default Artist