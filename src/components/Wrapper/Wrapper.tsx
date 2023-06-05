import React from 'react'

type Props = {
    children: any | any[]
}

const Wrapper = ({ children }: Props) => {
    return (
        <div className='container mx-auto lg:px-8 px-4'>{children}</div>
    )
}

export default Wrapper