interface PlayList {
    collaborative: boolean
    description: string
    external_urls: { spotify: string }
    href: string
    id: string
    images: { url: string, height: number, width: number }[]
    name: string
    owner: { display_name: string, external_urls: { spotify: string }, href: string, id: string, type: string, uri: string }
    primary_color: null
    public: null
    snapshot_id: string
    tracks: { href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks', total: 50 }
    type: string
    uri: string
}