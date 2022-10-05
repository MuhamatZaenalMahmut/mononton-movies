const initialState = {
    now_playing: [],
    popular: [],
    top_rated: [],
    upcoming: [],
    detail: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIES_NOW_PLAYING':
            return {
                ...state,
                now_playing: action.data
            };
        case 'MOVIES_POPULAR':
            return {
                ...state,
                popular: action.data
            };
        case 'MOVIES_TOP_RATED':
            return {
                ...state,
                top_rated: action.data
            };    
        case 'MOVIES_UPCOMING':
            return {
                ...state,
                upcoming: action.data
            };
        case 'MOVIES_DETAIL':
            return {
                ...state,
                detail: action.data
            };
        default:
            return state
    }
}