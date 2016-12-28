import * as actionTypes from 'actions/actionTypes';

const initialState = {
    isFetchingSomething: false,
};

export default function appState(state = initialState, action) {
    switch (action.type) {
        // Fetch Something
        case actionTypes.FETCH_SOMETHING_REQUEST_TRIGGERED: {
            return {
                ...state,
                isFetchingSomething: true,
            };
        }
        case actionTypes.FETCH_SOMETHING_REQUEST_SUCCESS:
        case actionTypes.FETCH_SOMETHING_REQUEST_FAILURE: {
            return {
                ...state,
                isFetchingSomething: initialState.isFetchingSomething,
            };
        }
        default: {
            return state;
        }
    }
}
