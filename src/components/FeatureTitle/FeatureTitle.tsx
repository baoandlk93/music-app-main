import React from 'react'

interface Props {
    smallTitle?: string,
    darkWord: string,
    primaryWord: string
}

const FeatureTitle = ({ smallTitle, darkWord, primaryWord }: Props) => {
    return (
        <div className='relative -mt-12 mb-4'>
            {smallTitle && <div className='uppercase text-body-color font-semibold text-xs mb-1'>{smallTitle}</div>}
            <h3 className='flex items-center'>
                <div className='grow basis-0 text-[2rem] font-bold capitalize'>
                    <span className='text-dark font-roboto '>{darkWord}</span>
                    <span className='text-primary'>{primaryWord}</span>
                </div>
            </h3>
        </div>
    )
}

export default FeatureTitle