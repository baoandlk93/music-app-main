import classNames from 'classnames'
import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { RiVolumeDownFill } from 'react-icons/ri'

type Props = {}

const VolumeSlice = (props: Props) => {
    const [value, setValue] = useState<number>(0.5)
    const [active, setActive] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const handleChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(e.currentTarget.value))
    }

    const handleClickVolume = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setActive(prev => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (!containerRef.current) return
            if (!containerRef.current.contains(e.target)) {
                setActive(false)
            }
        }

        window.addEventListener("click", handleClickOutside)
        return () => {
            window.removeEventListener("click", handleClickOutside)
        }
    }, [])
    return (
        <div className='relative hidden sm:block' ref={containerRef}>
            <button onClick={handleClickVolume} className='p-2 text-xl text-dark'><RiVolumeDownFill /></button>
            <div className={classNames('absolute hidden [&.active]:block  z-[2] top-0 left-0 -rotate-90 origin-top -translate-x-2/4 -translate-y-[calc(100%_+_16px)] ', { active })}>
                <div className='w-28 bg-white shadow-[0_0_3rem_0_rgba(21,23,25,.25)] rounded flex items-center justify-center p-4'>
                    <input
                        style={{ background: `linear-gradient(to right, rgb(21, 23, 25) 0%, rgb(21, 23, 25) ${value * 100}%, rgba(21, 23, 25, 0) ${value * 100}%, rgba(21, 23, 25, 0) 100%)` }}
                        onChange={handleChangeVolume}
                        className='w-full appearance-none cursor-pointer  h-1 shadow-[inset_0px_0px_0px_4px_rgba(0,0,0,0.2)] volume-slice'
                        type="range" min={0} max={1} value={value} step={0.1} />
                </div>
            </div>
        </div>
    )
}

export default VolumeSlice