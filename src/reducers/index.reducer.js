import { combineReducers } from 'redux';

import appState from './appState.reducer';

const mainReducer = combineReducers({
    appState,
});

export default mainReducer;
