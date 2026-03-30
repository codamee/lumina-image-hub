import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PIXELS_KEY = import.meta.env.VITE_PIXELS_KEY

export async function getPhotos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.unsplash.com/search/photos',
        {
            params: { query, page, per_page },
            headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
        }
    )
    return res.data.results
}
export async function getVideos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.pexels.com/v1/videos/search',
        {
            params: { query, page, per_page },
            headers: { Authorization: PIXELS_KEY }
        }
    )
    return res.data.videos
}