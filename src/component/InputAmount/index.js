import React from "react";
import { connect } from "react-redux";

import { CURRENCY_NAME } from "../../utils/currency-name";
import { changeAmountValue } from "../../actions/exchange";
import Style from "./style";

class InputAmount extends React.PureComponent {
  changeAmount = e => this.props.changeAmountValue(e.target.value);

  render() {
    const { base, amount } = this.props;
    return (
      <Style.Wrapper>
        <Style.CurrencyName xs={12}>{CURRENCY_NAME[base]}</Style.CurrencyName>
        <Style.Currency xs={6}>{base}</Style.Currency>
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
  const { base, amount } = state.exchange;

  return {
    base,
    amount
  };
};

// no need to use dispatch since it handled inside function using thunk middleware
const mapDispatchToProps = {
  changeAmountValue
};

// connect component with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAmount);
