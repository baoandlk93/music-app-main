import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { RiSpotifyFill } from 'react-icons/ri'
import Wrapper from '../../components/Wrapper/Wrapper'
import configs from '../../services/apiConfig'
import randomString from '../../utils/randomString'
import axios from 'axios'

type Props = {}

const Auth = (props: Props) => {
  const [searchParams, setSearchPrams] = useSearchParams()
  const navigation = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    // console.log("call --- api")
    const code = searchParams.get("code")
    if (!code) return

    auth.login(code).then(() => navigation("/", { replace: true }))
      .catch(err => console.log(err))
  }, [searchParams])

  const handleClickLogin = () => {
    const redirectUrl = `${import.meta.env.VITE_WEB_URL}/auth`
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "playlist-modify-public",
      "user-top-read"
    ]

    const oauthUrl = `https://accounts.spotify.com/authorize?redirect_uri=${redirectUrl}&client_id=${configs.client_id}&response_type=code&scope=${scopes.join("%20")}`
    window.open(oauthUrl, "_self")
  }

  return (
    <div className='bg-white '>
      <Wrapper>
        <div className='w-full h-screen flex items-center justify-center flex-col'>
          <img className='w-3/4 md:w-1/3 lg:w-[20%]' src="/images/logo.svg" alt="logo" />
          <div className='mt-24'>
            <button onClick={handleClickLogin} className='flex items-center px-6 hover:bg-dark/90 transition-all decoration-purple-300 py-3 rounded-md bg-dark text-white '>
              <RiSpotifyFill className='text-3xl mr-1' />
              <span className='font-semibold xs:text-base text-sm'>Continue with Spotify</span>
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Auth