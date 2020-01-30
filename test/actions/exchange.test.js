import configureStore from "../../src/store/config";
import * as actions from "../../src/actions/exchange";

describe("Exchange actions", () => {
  it("should successfully create store", () => {
    // define expected value
    const expectedValue = {
      exchange: {
        amount: "10.000",
        base: "",
        exchangeRates: {},
        notShowedRates: [],
        showedRates: []
      }
    };

    // create store
    const store = configureStore();

    expect(store.getState()).toEqual(expectedValue);
  });

  it("should successfully return value from api", async () => {
    // define expected value
    const expectedValue = {
      exchange: {
        amount: "10.000",
        base: "USD",
        exchangeRates: {
          CAD: expect.any(Number),
          HKD: expect.any(Number),
          ISK: expect.any(Number),
          PHP: expect.any(Number),
          DKK: expect.any(Number),
          HUF: expect.any(Number),
          CZK: expect.any(Number),
          GBP: expect.any(Number),
          RON: expect.any(Number),
          SEK: expect.any(Number),
          IDR: expect.any(Number),
          INR: expect.any(Number),
          BRL: expect.any(Number),
          RUB: expect.any(Number),
          HRK: expect.any(Number),
          JPY: expect.any(Number),
          THB: expect.any(Number),
          CHF: expect.any(Number),
          EUR: expect.any(Number),
          MYR: expect.any(Number),
          BGN: expect.any(Number),
          TRY: expect.any(Number),
          CNY: expect.any(Number),
          NOK: expect.any(Number),
          NZD: expect.any(Number),
          ZAR: expect.any(Number),
          USD: expect.any(Number),
          MXN: expect.any(Number),
          SGD: expect.any(Number),
          AUD: expect.any(Number),
          ILS: expect.any(Number),
          KRW: expect.any(Number),
          PLN: expect.any(Number)
        },
        showedRates: ["CAD", "HKD", "ISK", "PHP", "DKK"],
        notShowedRates: [
          "HUF",
          "CZK",
          "GBP",
          "RON",
          "SEK",
          "IDR",
          "INR",
          "BRL",
          "RUB",
          "HRK",
          "JPY",
          "THB",
          "CHF",
          "EUR",
          "MYR",
          "BGN",
          "TRY",
          "CNY",
          "NOK",
          "NZD",
          "ZAR",
          "USD",
          "MXN",
          "SGD",
          "AUD",
          "ILS",
          "KRW",
          "PLN"
        ]
      }
    };

    // create store
    const store = configureStore();

    // call function
    await store.dispatch(actions.getLatestList());

    // check the result
    expect(store.getState()).toEqual(expectedValue);
  });

  it("should successfully add new value to showed rates", () => {
    // define expected value
    const expectedValue = {
      exchange: {
        amount: "10.000",
        base: "",
        exchangeRates: {},
        notShowedRates: [],
        showedRates: ["it worked!"]
      }
    };

    // create store
    const store = configureStore({
      exchange: {
        amount: "10.000",
        base: "",
        exchangeRates: {},
        notShowedRates: ["it worked!"],
        showedRates: []
      }
    });

    // invoke function to add new value
    store.dispatch(actions.addShowedList("it worked!"));

    expect(store.getState()).toEqual(expectedValue);
  }, 10000);

  it("should successfully remove value from showed rates", () => {
    // define expected value
    const expectedValue = {
      exchange: {
        amount: "10.000",
        base: "",
        exchangeRates: {},
        notShowedRates: ["it worked!"],
        showedRates: []
      }
    };

    // create store
    const store = configureStore({
      exchange: {
        amount: "10.000",
        base: "",
        exchangeRates: {},
        notShowedRates: [],
        showedRates: ["it worked!"]
      }
    });

    // invoke function to add new value
    store.dispatch(actions.removeShowedList("it worked!"));

    expect(store.getState()).toEqual(expectedValue);
  });

  it("should update amount for numeric character only", () => {
    // create store
    const store = configureStore();

    // case 1
    const input = "100.5";
    const expected = "100.5";
    store.dispatch(actions.changeAmountValue(input));
    const result = store.getState().exchange.amount;

    expect(result).toBe(expected);

    // case 2
    const input2 = "1000d";
    const expected2 = "1000";
    store.dispatch(actions.changeAmountValue(input2));
    const result2 = store.getState().exchange.amount;

    expect(result2).toBe(expected2);

    // case 3
    const input3 = "1234abc567";
    const expected3 = "1234567";
    store.dispatch(actions.changeAmountValue(input3));
    const result3 = store.getState().exchange.amount;

    expect(result3).toBe(expected3);

    // case 4
    const input4 = "100....5";
    const expected4 = "100.5";
    store.dispatch(actions.changeAmountValue(input4));
    const result4 = store.getState().exchange.amount;

    expect(result4).toBe(expected4);
  });
});
