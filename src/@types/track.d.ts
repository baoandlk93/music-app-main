interface Track {
    album: Album
    artists: Artist[]
    available_markets: string[],
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: {
        isrc: string,
        ean: string,
        upc: string
    }
    external_url: {
        spotify: string
    },
    href: string,
    id: string
    is_playable: boolean
    linked_from: object
    restrictions: {
        reason: "markets" | "product" | "explicit"
    }
    name: string,
    popularity: number
    preview_url: string
    type: string
    is_local: boolean
    uri: string
}

interface RecentTrackResponse {
    next: string | null,
    total: number
    items: { track: Track, played_at: string }[]
}

