const initialState = {
    popular: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'PERSON_POPULAR':
            return {
                ...state,
                popular: action.data
            };
        default:
            return state
    }
}