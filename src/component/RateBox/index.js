import React from "react";
import { connect } from "react-redux";

import { CURRENCY_NAME } from "../../utils/currency-name";
import { removeShowedList } from "../../actions/exchange";
import Style from "./style";
import { Col } from "react-flexbox-grid";

class RateBox extends React.PureComponent {
  /**
   * Remove this component from the view.
   */
  removeMe = () => {
    const { currency } = this.props;
    return this.props.removeShowedList(currency);
  };

  render() {
    const { amount, base } = this.props; // variable from redux state
    const { currencyRateValue, currency } = this.props; // variable from component definition

    const convertedAmount = (currencyRateValue * amount).toLocaleString();
    return (
      <Style.Wrapper>
        {/* Information Section */}
        <Col xs={10}>
          <Style.Information>
            <Style.Currency xs={6}>{currency}</Style.Currency>
            <Style.ConvertedAmount xs={6}>
              {convertedAmount}
            </Style.ConvertedAmount>
            <Style.CurrencyDescription xs={12}>
              {CURRENCY_NAME[currency]}
            </Style.CurrencyDescription>
            <Style.ConversionRate xs={12}>
              1 {base} = {currency} {currencyRateValue.toLocaleString()}
            </Style.ConversionRate>
          </Style.Information>
        </Col>
        {/* Delete Button Section */}
        <Col xs={2} style={{ padding: 0 }}>
          <Style.RemoveButton
            onClick={this.removeMe}
            id={`remove-btn-${currency}`}
          >
            ( x )
          </Style.RemoveButton>
        </Col>
      </Style.Wrapper>
    );
  }
}

// redux configuration
const mapStateToProps = state => {
  const { amount, base } = state.exchange;

  return {
    amount,
    base
  };
};

// no need to use dispatch since it handled inside function using thunk middleware
const mapDispatchToProps = {
  removeShowedList
};

// connect component with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RateBox);
