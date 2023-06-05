/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API_KEY: string
    readonly VITE_API_SECRET: string
    readonly VITE_WEB_URL: string
    readonly VITE_SPOTIFY_CLIENT_ID: string
    readonly VITE_SPOTIFY_CLIENT_SECRET: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

