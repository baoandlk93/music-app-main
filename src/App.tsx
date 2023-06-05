import React, { useEffect } from 'react'
import LeftSide from './components/LeftSide/LeftSide'
import Header from './components/Header/Header'
import ContextProvider from './contexts'
import { Outlet, useSearchParams } from 'react-router-dom'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import BackDrop from './components/Backdrop/BackDrop'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import axios from 'axios'
import md5 from 'md5'
import lastFmService from './services/apiServices'


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Outlet />
      </ContextProvider>
    </div>
  )
}

export default App
