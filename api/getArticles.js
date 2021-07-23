export async function getArticles() {
    const res = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=0414355101d342629c26db7d8f0ae77c')
    const articles = await res.json()
    return {
        articles
    }
}