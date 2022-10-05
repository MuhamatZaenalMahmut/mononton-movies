
import { popular } from "@constants/apiPerson";
import { showToast } from "@constants";
import { Person_Popular } from '@actions';
import store from "@stores/store";

class PersonUtils {

    async popular(params) {
        return params = await popular(params).then((response) => {
            const respon = response.data
            return store.dispatch(Person_Popular(respon))

        }).catch((error) => {
            return showToast('Data request failed')
        })
    }
}

const personUtils = new PersonUtils()

Object.freeze(personUtils)

export default personUtils