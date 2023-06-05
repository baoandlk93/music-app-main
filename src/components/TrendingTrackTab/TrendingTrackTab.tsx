import classNames from 'classnames'
import React, { MouseEvent, useRef, useState } from 'react'
import TrackListItem from '../TrackListItem/TrackListItem'

type Props = {}

type TabItem = "Recent" | "Trending" | "International"
const TrendingTrackTab = (props: Props) => {
    const tabIndicator = useRef<HTMLSpanElement>(null)
    const [currentTab, setCurrentTab] = useState<TabItem>("Recent")
    const handleSelectTab = (tab: TabItem) => {
        return (e: MouseEvent<HTMLLIElement>) => {
            setCurrentTab(tab)
            if (!tabIndicator.current) return
            tabIndicator.current.style.left = e.currentTarget.offsetLeft + "px"
            tabIndicator.current.style.width = e.currentTarget.offsetWidth + "px"
        }
    }
    return (
        <div className=''>
            <div className='relative'>
                <ul className='flex gap-x-2 border-b border-[#eff2f5]'>
                    <li onClick={handleSelectTab("Recent")} className={classNames('p-2 capitalize cursor-pointer text-dark [&.active]:text-primary text-sm font-medium text-center ', { active: currentTab === "Recent" })}>Recent</li>
                    <li onClick={handleSelectTab("Trending")} className={classNames('p-2 capitalize cursor-pointer text-dark [&.active]:text-primary text-sm font-medium text-center ', { active: currentTab === "Trending" })}>Trending</li>
                    <li onClick={handleSelectTab("International")} className={classNames('p-2 capitalize cursor-pointer text-dark [&.active]:text-primary text-sm font-medium text-center ', { active: currentTab === "International" })}>international</li>
                </ul>
                <span ref={tabIndicator} className='transition-all duration-300 absolute bottom-0 left-0 h-0.5 w-16 bg-primary'></span>
            </div>
            <div>
                {
                    new Array(5).fill(0).map((_, index) => {
                        return (
                            <TrackListItem key={index.toString()} />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default TrendingTrackTab