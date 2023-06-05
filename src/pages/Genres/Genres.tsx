import React from 'react'
import Hero from '../../components/Hero/Hero'
import Wrapper from '../../components/Wrapper/Wrapper'
import FeatureTitle from '../../components/FeatureTitle/FeatureTitle'
import { Link } from 'react-router-dom'
import MainContentWrapper from '../../components/MainContentWrapper/MainContentWrapper'

type Props = {}

const Genres = (props: Props) => {
    return (

        <MainContentWrapper heroClass='bg-hero'>
            <div className='mt-24'>
                <FeatureTitle darkWord='Music ' primaryWord='Genres' />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {
                        new Array(6).fill(0).map((_, index) => {
                            return (
                                <GenresItem key={index.toString()} />
                            )
                        })
                    }
                </div>


            </div>
        </MainContentWrapper>

    )
}

const GenresItem = () => {
    return (
        <div className='relative w-full rounded-xl overflow-hidden'>
            <Link to={"#"}>
                <img className='w-full' src="/images/genres.jpg" alt="genres" />
                <div className='text-white font-semibold absolute w-full
                                left-0 bottom-0 px-4 pt-6 pb-4 bg-gradient-to-t from-black from-0 to-black/0 to-100%'>Sufi</div>
            </Link>
        </div>
    )
}

export default Genres