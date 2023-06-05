import classNames from 'classnames'
import React from 'react'

type Props = {
    className?: string
}

const Hero = ({ className }: Props) => {
    return (
        <div className={classNames(
            `w-full h-80  bg-cover bg-center relative
                after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t
                after:from-[#fff] after:to-[#ffffff3b]`, className)} ></div>
    )
}

export default Hero