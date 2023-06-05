
interface AuthProfile {
  country: string,
  display_name: string,
  email: string,
  explicit_content: {
    filter_enabled: false,
    filter_locked: false
  },
  external_urls: {
    spotify: string
  },
  followers: {
    href: string,
    total: number
  },
  href: string,
  id: string,
  images: {
    url: string
    height: 300,
    width: 300
  }[

  ],
  product: string,
  type: string,
  uri: string
}

interface TokenResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

interface TokenStorage {
  access_token: string | null
  refresh_token: string | null
  token_type: string | null
}
interface RefreshTokenResponse extends Omit<TokenResponse, "refresh_token"> { }