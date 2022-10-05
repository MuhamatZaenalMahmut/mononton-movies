
import { airing_today, on_the_air, popular, top_rated, detail } from "@constants/apiTV";
import { showToast } from "@constants";
import { TV_airing_today, TV_on_the_air, TV_popular, TV_top_rated, TV_detail } from '@actions';
import store from "@stores/store";

class TVUtils {

    async airing_today(params) {
        return params = await airing_today(params).then((response) => {
            const respon = response.data
            return store.dispatch(TV_airing_today(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async on_the_air(params) {
        return params = await on_the_air(params).then((response) => {
            const respon = response.data
            return store.dispatch(TV_on_the_air(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async popular(params) {
        return params = await popular(params).then((response) => {
            const respon = response.data
            return store.dispatch(TV_popular(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async top_rated(params) {
        return params = await top_rated(params).then((response) => {
            const respon = response.data
            return store.dispatch(TV_top_rated(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }

    async detail(params) {
        return params = await detail(params).then((response) => {
            const respon = response.data
            return store.dispatch(TV_detail(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }
}

const tVUtils = new TVUtils()

Object.freeze(tVUtils)

export default tVUtils