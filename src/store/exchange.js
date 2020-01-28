import { EXCHANGE_TYPE } from "../utils/reducer-type";

const initialState = {
  exchangeRates: {},
  base: "",
  showedRates: [], // to store which currency is displayed in the page
  notShowedRates: [] // to store which currency is not displayed yet
};

/**
 * Store any value from actions into redux state.
 * @param {object} state - redux state to be updated
 * @param {object} action - action object from redux dispatch method
 *
 * action object contains:
 *  type: String    => action name to determined the handler
 *  payload: object => value to be updated into state
 */
export default function reducers(state = initialState, action) {
  switch (action.type) {
    /**
     * Store exchage rates value fetched from api.
     *
     * @description
     * Also set top 5 currencies to be shown in the page.
     *
     */
    case EXCHANGE_TYPE.GET_LIST: {
      const exchangeRates = Object.keys(action.payload.rates);

      const showedRates = exchangeRates.splice(0, 5);
      const notShowedRates = exchangeRates;
      return {
        ...state,
        exchangeRates: action.payload.rates,
        base: action.payload.base,
        showedRates,
        notShowedRates
      };
    }

    /**
     * Add designated exchange rate into display.
     */
    case EXCHANGE_TYPE.ADD_SHOW_LIST: {
      const showedRates = [...state.showedRates];
      showedRates.push(action.payload);

      // define exchange rate that left off the display.
      const notShowedRates = state.notShowedRates.filter(
        (_, rate) => rate !== action.payload
      );
      return {
        ...state,
        showedRates,
        notShowedRates
      };
    }

    /**
     * Remove designated rate from display.
     */
    case EXCHANGE_TYPE.REMOVE_SHOW_LIST: {
      const showedRates = state.showedRates.filter(
        (_, rate) => rate !== action.payload
      );

      // update exchange rate that left off the display.
      const notShowedRates = [...state.notShowedRates];
      notShowedRates.push(action.payload);
      return {
        ...state,
        showedRates,
        notShowedRates
      };
    }

    /**
     * Default handling if no action.type matches.
     */
    default:
      return state;
  }
}
