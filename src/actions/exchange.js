import axios from "axios";
import { EXCHANGE_TYPE } from "../utils/reducer-type";

// define abstract configuration for communicating with api
const exchangeAPI = axios.create({
  baseURL: "https://api.exchangeratesapi.io/"
});

/**
 * Fetch latest exchange rates data from API.
 *
 * @param {function} dispatch - redux function
 */
export const getLatestList = (baseCurrency = "USD") => dispatch =>
  exchangeAPI
    .get(`/latest?base=${baseCurrency}`)
    .then(result =>
      dispatch({
        type: EXCHANGE_TYPE.GET_LIST,
        payload: result.data
      })
    )
    .catch(error => alert(error.message));

/**
 * Update value in redux every change made inside input component.
 * @param {string} amount - input number
 */
export const changeAmountValue = amount => dispatch => {
  const inputValue = amount === "" ? "0" : amount;

  return dispatch({
    type: EXCHANGE_TYPE.CHANGE_AMOUNT,
    payload:
      inputValue.substring(0, 1) === "0" && inputValue.length !== 1
        ? inputValue.substring(1)
        : inputValue.match(/[0-9]*\.?[0-9]*/)
  });
};

export const addShowedList = currency => dispatch =>
  dispatch({
    type: EXCHANGE_TYPE.ADD_SHOW_LIST,
    payload: currency
  });

export const removeShowedList = currency => dispatch =>
  dispatch({
    type: EXCHANGE_TYPE.REMOVE_SHOW_LIST,
    payload: currency
  });
