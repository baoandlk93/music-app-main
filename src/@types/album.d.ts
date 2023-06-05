interface Album {
    album_type: "compilation" | "album" | "single",
    total_track: number,
    available_markets: string[],
    external_url: {
        spotify: string
    },
    href: string,
    id: string,
    images: { url: string, height: number, width: number }[]
    name: string,
    release_date: string,
    release_date_precision: "year" | "month" | "day",
    type: string
    url: string
    restrictions: {
        reason: "markets" | "product" | "explicit"
    }
    copyrights: {
        text: string,
        type: string
    }
    external_ids: {
        isrc: string,
        ean: string,
        upc: string
    }
    genres: string[]
    label: string
    popularity: number,
    album_group: "compilation" | "album" | "single" | "appears_on",
    artist: Artist[]
}