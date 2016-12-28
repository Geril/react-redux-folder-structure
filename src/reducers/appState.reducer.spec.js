/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */

import assert from 'assert';
import deepFreeze from 'deep-freeze';

import * as actionTypes from 'actions/actionTypes';
import appStateReducer from './appState.reducer';

describe('AppState reducer', () => {
    it('It should set "isFetchingSomething" to true when request to some endpoint is made', () => {
        const initialState = {
            isFetchingSomething: false,
        };

        const expectedState = {
            isFetchingSomething: true,
        };

        const resultState = appStateReducer(deepFreeze(initialState), {
            type: actionTypes.FETCH_SOMETHING_REQUEST_TRIGGERED,
        });

        assert.deepEqual(resultState, expectedState);
    });

    it('It should set "isFetchingSomething" to false when request to some endpoint is finished', () => {
        const initialState = {
            isFetchingSomething: true,
        };

        const expectedState = {
            isFetchingSomething: false,
        };

        const resultState1 = appStateReducer(deepFreeze(initialState), {
            type: actionTypes.FETCH_SOMETHING_REQUEST_SUCCESS,
        });

        const resultState2 = appStateReducer(deepFreeze(initialState), {
            type: actionTypes.FETCH_SOMETHING_REQUEST_FAILURE,
        });

        assert.deepEqual(resultState1, expectedState);
        assert.deepEqual(resultState2, expectedState);
    });
});
