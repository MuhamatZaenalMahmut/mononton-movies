const initialState = {
    airing_today: [],
    on_the_air: [],
    popular: [],
    top_rated: [],
    detail:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TV_AIRING_TODAY':
            return {
                ...state,
                airing_today: action.data
            };
        case 'TV_ON_THE_AIR':
            return {
                ...state,
                on_the_air   : action.data
            };
        case 'TV_POPULAR':
            return {
                ...state,
                popular: action.data
            };
        case 'TV_TOP_RATED':
            return {
                ...state,
                top_rated : action.data
            };
        case 'TV_DETAIL':
            return {
                ...state,
                detail : action.data
            };
        default:
            return state
    }
}