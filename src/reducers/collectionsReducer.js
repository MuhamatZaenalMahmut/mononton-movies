const initialState = {
    collections: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'COLLECTIONS':
            return {
                ...state,
                collections: action.data
            };
        default:
            return state
    }
}