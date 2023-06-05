import React from 'react'
import Hero from '../../components/Hero/Hero'
import Wrapper from '../../components/Wrapper/Wrapper'
import { RiDownload2Fill, RiMoreFill, RiPlayFill } from 'react-icons/ri'
import SlideList from '../../components/SliceList/SlideList'
import MainContentWrapper from '../../components/MainContentWrapper/MainContentWrapper'

type Props = {}

const SongDetail = (props: Props) => {
    return (
        <MainContentWrapper heroClass='bg-song-hero'>
            <div>
                <div className=' -mt-12 mb-8 flex flex-col md:flex-row relative z-[1] gap-16'>
                    <div className='md:w-1/4 max-w-[400px] md:max-w-none w-full mx-auto text-center'>
                        <img src="/images/song.jpg" alt="detail" className='w-full object-cover rounded-2xl' />
                    </div>
                    <div className='md:w-[calc(100%_-_25%_-_64px)] '>
                        <div className='flex items-start justify-between'>
                            <span className='text-dark text-2xl font-semibold mb-2'>Electric wave</span>
                            <button className='text-2xl text-body-color'><RiMoreFill /></button>
                        </div>
                        <ul className='flex text-body-color text-sm gap-x-2 capitalize mb-4'>
                            <li>Pop</li>
                            <li className='before:content-["\2022"] before:mr-2'>01:23</li>
                            <li className='before:content-["\2022"] before:mr-2'>Apr 14, 2019</li>
                            <li className='before:content-["\2022"] before:mr-2'>Travers Music Company</li>
                        </ul>
                        <div className='mb-4 text-body-color text-sm'>
                            <div className='mb-2 text-sm text-body-color'>
                                Compose by: <span className='text-dark font-medium'>Lenisa Gory</span>
                            </div>
                            <div className='mb-2 text-sm text-body-color'>
                                Lyrics by: <span className='text-dark font-medium'>Gerrina Linda</span>
                            </div>
                            <div className='mb-2 text-sm text-body-color'>
                                Music director: <span className='text-dark font-medium'>Nutty Nina</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <button className='
                                w-10 h-10 rounded-full bg-primary text-white flex text-2xl items-center justify-center'>
                                <RiPlayFill />
                            </button>
                            <button className='text-dark flex items-center gap-1'><RiDownload2Fill className='text-2xl' />Download</button>
                        </div>

                        <div className='mt-12'>
                            <div className='text-dark mb-4 font-semibold'>Lyrics</div>
                            <div className='text-body-color text-sm'>
                                <div>
                                    <p>This one's for you Mrs Van De Kamp!</p>

                                    <p>
                                        My love for you is like the most brave aubergine,
                                        Your face reminds me of repugnant goats,
                                        Together, we are like bread rolls and olive oil.
                                    </p>

                                    <p>
                                        Oh darling Nigel,
                                        My brave aubergine,
                                        My repugnant onion,
                                        The perfect companion to my bread rolls soul.
                                    </p>

                                    <p>
                                        Poppies are red,
                                        Kingfishers are blue,
                                        I like drinking tequila,
                                        But not as much as I love crashing with you!
                                    </p>

                                    <p>
                                        Oh darling Nigel,
                                        Your cheeks are like clean rakes on a summer day,
                                        You're like the most super barman to ever walk Hull.

                                    </p>
                                    <p>
                                        Your repugnant goat face,
                                        Your olive oil soul,
                                        Your clean cheeks,
                                        Your super barman being...
                                    </p>

                                    <p>
                                        How could I look at another when our brave aubergine love is so strong?
                                    </p>

                                    <p>I love you Mrs Van De Kamp!</p>
                                    <p>I love you Mrs Van De Kamp!</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='mt-12'>
                    <div className='relative  mb-8'>
                        <h3 className='flex items-center'>
                            <div className='grow basis-0 text-[28px] font-bold capitalize'>
                                <span className='text-dark font-roboto'>Related </span>
                                <span className='text-primary'>Songs</span>
                            </div>
                        </h3>
                    </div>
                    <SlideList />
                </div>
            </div>
        </MainContentWrapper>

    )
}

export default SongDetail