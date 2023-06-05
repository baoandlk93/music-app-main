import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Swiper as SwiperType, Pagination } from 'swiper'
import { Link } from 'react-router-dom';

type Props = {}

const ListArtist = (props: Props) => {
    return (
        <div className='relative'>
            <Swiper
                slidesPerView={2}
                modules={[Pagination]}
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}

                className='pb-8'
                autoplay={
                    {
                        delay: 5000,
                        disableOnInteraction: false
                    }
                }
                breakpoints={{
                    564: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 6,
                    },

                }}
                spaceBetween={16}

            >

                <SwiperSlide><ArtistSlice /></SwiperSlide>
                <SwiperSlide><ArtistSlice /></SwiperSlide>
                <SwiperSlide><ArtistSlice /></SwiperSlide>
                <SwiperSlide><ArtistSlice /></SwiperSlide>
                <SwiperSlide><ArtistSlice /></SwiperSlide>
                <SwiperSlide><ArtistSlice /></SwiperSlide>
                <SwiperSlide><ArtistSlice /></SwiperSlide>

            </Swiper>

        </div>
    )
}

const ArtistSlice = () => {
    return (

        <Link to={"#"}>
            <div className='w-full flex items-center justify-center flex-col'>
                <img src="/images/art-7.jpg" alt="artist" className='rounded-full w-32 h-32 object-cover' />
                <div className='text-color-text text-sm'>Johnny Marrow</div>
            </div>
        </Link>
    )
}

export default ListArtist