import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import mainReducer from 'reducers/index.reducer';

const finalCreateStore = compose(
    applyMiddleware(
        thunk
    ),
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(mainReducer, initialState);
    return store;
}
