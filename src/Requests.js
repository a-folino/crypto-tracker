const requests = {
    top50: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=50&page=1&sparkline=false`,
    top502: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=50&page=2&sparkline=false`,
    trending: `https://api.coingecko.com/api/v3/search/trending`
}

export default requests