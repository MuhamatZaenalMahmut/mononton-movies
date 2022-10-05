
import { now_playing, popular, top_rated, upcoming, detail } from "@constants/apiMovies";
import { showToast } from "@constants";
import { Movies_now_playing, Movies_popular, Movies_top_rated, Movies_upcoming, Movies_detail } from '@actions';
import store from "@stores/store";

class MoviesUtils {

    async now_playing() {
        return params = await now_playing().then((response) => {
            const respon = response.data
            return store.dispatch(Movies_now_playing(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async popular() {
        return params = await popular().then((response) => {
            const respon = response.data
            return store.dispatch(Movies_popular(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async top_rated() {
        return params = await top_rated().then((response) => {
            const respon = response.data
            return store.dispatch(Movies_top_rated(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async upcoming() {
        return params = await upcoming().then((response) => {
            const respon = response.data
            return store.dispatch(Movies_upcoming(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async detail(params) {
        return params = await detail(params).then((response) => {
            const respon = response.data           
            return store.dispatch(Movies_detail(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }
}

const moviesUtils = new MoviesUtils()

Object.freeze(moviesUtils)

export default moviesUtils