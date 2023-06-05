
interface Artist {
    external_url: {
        spotify: string
    },
    followers: {
        href: string,
        total: number
    },
    genres: string[],
    href: string,
    id: string
    images: { url: string, height: number, width: number }[]
    name: string,
    popularity: number,
    type: string,
    uri: string
}