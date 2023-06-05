import classNames from 'classnames'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/Wrapper/Wrapper'
import SlideList from '../../components/SliceList/SlideList'
import ListArtist from '../../components/ListArtist/ListArtist'
import TopAlbum from '../../components/TopAlbum/TopAlbum'
import TrendingTrackTab from '../../components/TrendingTrackTab/TrendingTrackTab'
import Hero from '../../components/Hero/Hero'
import MainContentWrapper from '../../components/MainContentWrapper/MainContentWrapper'
import { useAuth } from '../../contexts/AuthContext'
import apiService from '../../services/apiServices'

interface Props { }

const Home = (props: Props) => {
    const auth = useAuth()
    useEffect(() => {
        apiService.album.getNewRelease().then(res => console.log(res.data))
    }, [])
    return (
        <MainContentWrapper heroClass='bg-hero'>
            {/* chart */}
            <div className='-mt-12'>
                <div className='relative  mb-8'>
                    <div className='uppercase text-body-color font-semibold text-xs mb-1'>LISTEN TOP CHARTS</div>
                    <h3 className='flex items-center'>
                        <div className='grow basis-0 text-[28px] font-bold capitalize'>
                            <span className='text-dark font-roboto'>Top </span>
                            <span className='text-primary'>Charts</span>
                        </div>
                        <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                    </h3>
                </div>
                <SlideList />
            </div>

            {/* trending track tab */}
            <div className='mt-12'>
                <div className='relative  mb-4'>
                    <div className='uppercase text-body-color font-semibold text-xs mb-1'>top to listen</div>
                    <h3 className='flex items-center'>
                        <div className='grow basis-0 text-[28px] font-bold capitalize'>
                            <span className='text-dark font-roboto '>music </span>
                            <span className='text-primary'>tracks</span>
                        </div>

                    </h3>
                </div>
                <TrendingTrackTab />
            </div>

            {/* new release */}
            <div className='mt-12'>
                <div className='relative  mb-8'>
                    <div className='uppercase text-body-color font-semibold text-xs mb-1'>new to listen</div>
                    <h3 className='flex items-center'>
                        <div className='grow basis-0 text-[28px] font-bold capitalize'>
                            <span className='text-dark font-roboto'>New </span>
                            <span className='text-primary'>Release</span>
                        </div>
                        <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                    </h3>
                </div>
                <SlideList />
            </div>

            {/* album */}
            <div className='mt-12'>
                <div className='relative mb-8'>
                    <div className='uppercase text-body-color font-semibold text-xs mb-1'>TRENDING TO LISTEN</div>
                    <h3 className='flex items-center'>
                        <div className='grow basis-0 text-[28px] font-bold capitalize'>
                            <span className='text-dark font-roboto '>top </span>
                            <span className='text-primary'>albums</span>
                        </div>
                        <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                    </h3>
                </div>
                <TopAlbum />
            </div>

            {/* artists */}
            <div className='mt-12'>
                <div className='relative  mb-8'>
                    <div className='uppercase text-body-color font-semibold text-xs mb-1'>Best to listen</div>
                    <h3 className='flex items-center'>
                        <div className='grow basis-0 text-[28px] font-bold capitalize'>
                            <span className='text-dark font-roboto '>featured </span>
                            <span className='text-primary'>Artists</span>
                        </div>
                        <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                    </h3>
                </div>
                <ListArtist />
            </div>
        </MainContentWrapper>
    )
}



export default Home