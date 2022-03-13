import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}
export const movieType = {
    popular: 'popular',
    now_playing: 'now_playing',
    upcoming: 'upcoming',
    top_rated: 'top_rated'
}

export const tvSeriesType = {
    popular: 'popular',
    airing_today: 'airing_today',
    on_tv: 'on_tv',
    top_rated: 'top_rated'
}

const tmdbApi = {
    getMovieList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvSeriesList: (type, params) => {
        const url = 'tv/' + tvSeriesType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    details: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;