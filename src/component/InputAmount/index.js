import React from "react";
import { connect } from "react-redux";

import { CURRENCY_NAME } from "../../utils/currency-name";
import { changeAmountValue, getLatestList } from "../../actions/exchange";
import Style from "./style";

class InputAmount extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: "USD"
    };
  }
  /**
   * Update input text amount.
   */
  changeAmount = e => this.props.changeAmountValue(e.target.value);

  /**
   * Change currency and update store exchange values.
   */
  changeCurrency = e => {
    const selectedValue = e.target.value;

    // call api to fetch new data
    return this.props.getLatestList(selectedValue);
  };

  render() {
    const { amount, base, currencyList } = this.props;
    return (
      <Style.Wrapper>
        <Style.CurrencyName xs={12}>{CURRENCY_NAME[base]}</Style.CurrencyName>
        <Style.Currency xs={6}>
          <Style.Select onChange={this.changeCurrency}>
            <optgroup style={{ fontSize: 12 }}>
              {currencyList.map(currency => (
                <option
                  value={currency}
                  selected={this.state.selected === currency}
                >
                  {currency}
                </option>
              ))}
            </optgroup>
          </Style.Select>
        </Style.Currency>
        <Style.InputWrapper xs={6}>
          <Style.Input
            value={amount}
            onChange={this.changeAmount}
            id="amount-input"
            autoFocus
          />
        </Style.InputWrapper>
      </Style.Wrapper>
    );
  }
}

// redux configuration
const mapStateToProps = state => {
  const { amount, base, currencyList } = state.exchange;

  return {
    amount,
    base,
    currencyList
  };
};

// no need to use dispatch since it handled inside function using thunk middleware
const mapDispatchToProps = {
  changeAmountValue,
  getLatestList
};

// connect component with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAmount);
