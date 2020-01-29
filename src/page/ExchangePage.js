import React from "react";
import { connect } from "react-redux";

import InputAmount from "../component/InputAmount";
import { getLatestList } from "../actions/exchange";

class ExchangePage extends React.PureComponent {
  state = {
    amount: "10.0000"
  };

  changeAmount = e => this.setState({ amount: e.target.value });

  /**
   * Fetch latest rates from api after first time rendering.
   */
  componentDidMount() {
    this.props.getLatestList();
  }

  render() {
    const { base, showedRates, exchangeRates, amount } = this.props;
    return (
      <div style={{ width: 500 }}>
        <InputAmount />
        {showedRates.map(currency => {
          const rate = exchangeRates[currency];
          return (
            <div>
              {currency} - {(amount * rate).toFixed(4)}1 {base} = {currency}{" "}
              {rate}
            </div>
          );
        })}

        <div>- add new currency here -</div>
      </div>
    );
  }
}

// redux configuration
const mapStateToProps = state => {
  const {
    base,
    exchangeRates,
    showedRates,
    notShowedRates,
    amount
  } = state.exchange;

  return {
    base,
    exchangeRates,
    showedRates,
    notShowedRates,
    amount
  };
};

// no need to use dispatch since it handled inside function using thunk middleware
const mapDispatchToProps = {
  getLatestList
};

// connect component with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangePage);
