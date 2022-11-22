const COMMON_URL = "https://pokeapi.co/api/v2/pokedex/1/"

export function APIFetcher() {
    return fetch(`${COMMON_URL}`).then((response) =>
        response.json()
    );
}
// https://pokeapi.co/api/v2/pokemon/740

// export function APInfo(ID) {
//     return fetch(`${COMMON_URL}coins/${ID}`).then((res) => {
//         return res.json()
//     })
// }

// export function CoinPrice(CoinID: string) {
//     return fetch(`${COMMON_URL}tickers/${CoinID}`).then((res) => {
//         return res.json()
//     })
// }

// export function CoinChart(CoinID: string) {

//     const end = Math.floor(Date.now() / 1000)
//     const start = end - 69 * 60 * 24 * 6 * 2

//     return fetch(`${COMMON_URL}coins/${CoinID}/ohlcv/historical?start=${start}&end=${end}`).then((res) => {
//         return res.json()
//     })
// }