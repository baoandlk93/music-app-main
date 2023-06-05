import React from 'react'
import { RiAppStoreFill, RiGooglePlayFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-footer  pt-8 pb-32 relative 
        bg-center bg-cover
        before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        before:bg-gradient-to-t before:from-white/80 before:from-0 before:to-white before:to-100%'>
            <div className='relative z-[1] '>
                <Wrapper>
                    <div className='text-center text-3xl sm:text-4xl font-light text-dark'>info@listenapp.com</div>
                    <div className='flex justify-center items-center mt-4 gap-4 flex-wrap'>
                        <Link className='flex items-center capitalize font-medium justify-center rounded-lg py-3 px-5  box-border xs:w-44 w-56 bg-primary text-white gap-2' to={"#"}>
                            <RiGooglePlayFill className='text-2xl' />
                            <span>Google Play</span>
                        </Link>
                        <Link className='flex items-center capitalize font-medium justify-center rounded-lg py-3 px-5  box-border xs:w-44 w-56 bg-primary text-white gap-2' to={"#"}>
                            <RiAppStoreFill className='text-2xl' />
                            <span>App store</span>
                        </Link>
                    </div>
                </Wrapper>
            </div>
        </footer>
    )
}

export default Footer