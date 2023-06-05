import React from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'
import BackDrop from '../../components/Backdrop/BackDrop'

type Props = {}

const MainPage = (props: Props) => {
    return (
        <>
            <LeftSide />
            <Header />
            <MainContent>
                <Outlet />
                <Footer />
            </MainContent>
            <MusicPlayer />
            <BackDrop />
        </>
    )
}

export default MainPage