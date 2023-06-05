import React from 'react'
import Hero from '../Hero/Hero'
import Wrapper from '../Wrapper/Wrapper'

interface Props {
    children: any,
    heroClass?: string
}

const MainContentWrapper = ({ children, heroClass }: Props) => {
    return (
        <>
            <Hero className={heroClass} />
            <Wrapper>
                {
                    children
                }
            </Wrapper>
        </>
    )
}

export default MainContentWrapper