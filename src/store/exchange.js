import { EXCHANGE_TYPE } from "../utils/reducer-type";

const initialState = {
  exchangeRates: {},
  base: "",
  showedRates: [], // to store which currency is displayed in the page
  notShowedRates: [], // to store which currency is not displayed yet
  amount: "10.000",
  currencyList: []
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
     * action.payload is return value from api
     */
    case EXCHANGE_TYPE.GET_LIST: {
      const exchangeRates = Object.keys(action.payload.rates);
      const currencyList = [...exchangeRates];

      const showedRates = exchangeRates.splice(0, 5);
      const notShowedRates = exchangeRates;
      return {
        ...state,
        exchangeRates: action.payload.rates,
        base: action.payload.base,
        currencyList,
        showedRates,
        notShowedRates
      };
    }

    /**
     * Add designated exchange rate into display.
     *
     * action.payload contain currency
     */
    case EXCHANGE_TYPE.ADD_SHOW_LIST: {
      const showedRates = [...state.showedRates];
      showedRates.push(action.payload);

      // define exchange rate that left off the display.
      const notShowedRates = state.notShowedRates.filter(
        rate => rate !== action.payload
      );

      return {
        ...state,
        showedRates,
        notShowedRates
      };
    }

    /**
     * Remove designated rate from display.
     *
     * action.payload contain currency
     */
    case EXCHANGE_TYPE.REMOVE_SHOW_LIST: {
      const showedRates = state.showedRates.filter(
        rate => rate !== action.payload
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
     * Update amount value from user.
     *
     * @description
     * Action payload object is contain string input from user.
     */
    case EXCHANGE_TYPE.CHANGE_AMOUNT:
      return {
        ...state,
        amount: action.payload
      };

    /**
     * Default handling if no action.type matches.
     */
    default:
      return state;
  }
}
