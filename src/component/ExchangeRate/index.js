import React from "react";
import { connect } from "react-redux";

import RateBox from "../RateBox";
import Style from "./style";

/**
 * Component class act as wrapper for all displaying rates.
 */
class ExchangeRate extends React.PureComponent {
  render() {
    const { exchangeRates, showedRates } = this.props;

    return (
      <Style.Wrapper>
        {showedRates.map(currency => {
          const currencyRateValue = exchangeRates[currency];
          return (
            <RateBox
              currencyRateValue={currencyRateValue}
              currency={currency}
            />
          );
        })}
      </Style.Wrapper>
    );
  }
}

// redux configuration
const mapStateToProps = state => {
  const { exchangeRates, showedRates } = state.exchange;

  return {
    exchangeRates,
    showedRates
  };
};

// connect component with redux
export default connect(
  mapStateToProps,
  {}
)(ExchangeRate);
