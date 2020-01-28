import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducer'

/**
 * Initiate store for redux.
 * @param {object} initialState - object of state stored in redux
 */
export default function configureStore(initialState = {}) {
    let composeEnhancers = compose

    // set dev tools if browser have redux dev tools and development mode
    if (process.env.NODE_ENV === 'development' && '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    )
}
