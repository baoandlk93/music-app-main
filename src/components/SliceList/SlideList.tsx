import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiHeartFill, RiMore2Fill, RiPlayFill } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Swiper as SwiperType, Navigation, } from 'swiper'
type Props = {}

SwiperCore.use([Autoplay])

const SlideList = (props: Props) => {
    const navigationPrevRef = React.useRef<HTMLDivElement>(null)
    const navigationNextRef = React.useRef<HTMLDivElement>(null)
    const swiperRef = React.useRef<SwiperType>();

    const handleSlideChange = (swiper: SwiperCore) => {
        if (!navigationNextRef.current || !navigationPrevRef.current) return

        if (swiper.isEnd) {
            navigationNextRef.current.classList.add("end")
        }
        else {
            navigationNextRef.current.classList.remove("end")
        }

        if (swiper.isBeginning) {
            navigationPrevRef.current.classList.add("start")
        } else {
            navigationPrevRef.current.classList.remove("start")
        }
    };


    return (
        <div className='relative slice-list'>
            <Swiper
                slidesPerView={2}
                modules={[Navigation]}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                autoplay={
                    {
                        delay: 3000,
                        disableOnInteraction: false
                    }
                }
                breakpoints={{
                    564: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },

                }}
                spaceBetween={24}

            >

                <SwiperSlide><SliceCover /></SwiperSlide>
                <SwiperSlide><SliceCover /></SwiperSlide>
                <SwiperSlide><SliceCover /></SwiperSlide>
                <SwiperSlide><SliceCover /></SwiperSlide>
                <SwiperSlide><SliceCover /></SwiperSlide>
                <SwiperSlide><SliceCover /></SwiperSlide>
            </Swiper>
            <div ref={navigationNextRef} onClick={() => swiperRef.current?.slideNext()}
                className='absolute sm:[&.end]:hidden sm:flex hidden next-btn  w-10 h-10 bg-white z-[1] opacity-0 group-hover:opacity-100
                    transition-all duration-300 rounded-full translate-x-2/4  justify-center text-2xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.4)] items-center
                     cursor-pointer top-2/4 right-0 -translate-y-full'><RiArrowRightSLine /></div>
            <div ref={navigationPrevRef} onClick={() => swiperRef.current?.slidePrev()}
                className='absolute sm:[&.start]:hidden sm:flex hidden prev-btn w-10 h-10 bg-white z-[1] opacity-0 group-hover:opacity-100 
                     transition-all duration-300 rounded-full -translate-x-2/4  justify-center text-2xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.4)] items-center
                      cursor-pointer top-2/4 left-0 -translate-y-full'><RiArrowLeftSLine /> </div>
        </div>
    )
}

const SliceCover = () => {
    return (
        <div className='group'>
            <div className='w-full relative'>
                <img className='w-full object-cover rounded-2xl' src="/images/chart-1.jpg" alt="cover" />
                <div className='flex justify-between w-full absolute top-0 left-0 pb-8 px-4 pt-4
                before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2xl 
                before:bg-gradient-to-t before:from-black/0 before:to-black before:from-0 before:to-100% '>
                    <span className=' relative z-[1] rounded-full box-border w-6 h-6 bg-danger flex items-center justify-center text-white  text-base'><RiHeartFill /></span>
                    <button className=' relative z-[1] text-white group-hover:inline-block text-2xl hidden'><RiMore2Fill /></button>
                </div>
                <button className='w-10 hidden group-hover:flex absolute top-2/4 text-2xl text-dark left-2/4 rounded-full -translate-x-2/4 -translate-y-2/4 h-10  items-center justify-center bg-white'>
                    <RiPlayFill />
                </button>
            </div>
            <div className='text-dark text-sm font-semibold'>I love you mummy</div>
            <div className='text-[13px] text-[#8c9095]'>Arebica Luna</div>
        </div>
    )
}

export default SlideList