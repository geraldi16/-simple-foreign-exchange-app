import { EXCHANGE_TYPE } from "../utils/reducer-type";

const initialState = {
    exchangeRates: {},
    base: ''
}

/**
 * Store any value from actions into redux state.
 * @param {object} state - redux state to be updated
 * @param {object} action - action object from redux dispatch method
 */
export default function reducers(state = initialState, action){
    switch(action.type) {
        case EXCHANGE_TYPE.GET_LIST: 
            return {
                ...state,
                exchangeRates: action.payload.rates,
                base: action.payload.base
            }
        default: return state
    }
}