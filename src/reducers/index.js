import { combineReducers } from 'redux';
import MMKVStorage from 'react-native-mmkv-storage';
import auth from './authReducer';
import collections from './collectionsReducer';
import movies from './moviesReducer';
import person from './personReducer';
import tv from './tvReducer';

const appReducer = combineReducers({
    auth,
    collections,
    movies,
    person,
    tv
})

export const LogOut = () => ({ type: 'SIGN_OUT' })

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
        const storage = new MMKVStorage.Loader().initialize()
        storage.clearStore()
    }
    return appReducer(state, action)
}

export default rootReducer