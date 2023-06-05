import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { Suspense, lazy } from "react";
import Auth from "../pages/Auth/Auth";
import MainPage from "../pages/MainPage/MainPage";
const Home = lazy(() => import("../pages/Home/Home"))
const Detail = lazy(() => import("../pages/Detail/ArtistDetail"))
const SongDetail = lazy(() => import("../pages/Detail/SongDetail"))
const Genres = lazy(() => import("../pages/Genres/Genres"))
const GenresDetail = lazy(() => import("../pages/Detail/GenresDetail"))
const Artist = lazy(() => import("../pages/Artist/Artist"))

const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />,
                children: [
                    {
                        index: true,
                        element: <Suspense fallback={"loading..."}> <Home /></Suspense>
                    },
                    {
                        path: "/artists",
                        element: <Suspense fallback={"loading"}><Artist /></Suspense>
                    },
                    {
                        path: "/artists/detail",
                        element: <Suspense fallback={"loading"}><Detail /></Suspense>
                    },
                    {
                        path: "/song-detail",
                        element: <Suspense fallback={"loading"}><SongDetail /></Suspense>
                    },
                    {
                        path: "/genres",
                        element: <Suspense fallback={"loading"}><Genres /></Suspense>
                    },
                    {
                        path: "/genres/detail",
                        element: <Suspense fallback={"loading"}><GenresDetail /></Suspense>
                    }
                ]
            },
            {
                path: "/auth",
                element: <Auth />
            }
        ]
    }
])

export default routes