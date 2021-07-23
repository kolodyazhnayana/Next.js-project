export async function getNews() {
    const res = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-07-22&sortBy=popularity&apiKey=0414355101d342629c26db7d8f0ae77c')
    const news = await res.json()
    return {
        news
    }
}