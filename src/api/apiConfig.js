const apiConfig = {
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: '9d2e6b561bae7d3cc182e78ba8d4dc2a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;