import React from "react";
import { connect } from "react-redux";

import AddRate from "../component/AddRate";
import ExchangeRate from "../component/ExchangeRate";
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
    return (
      <div style={{ width: 500, padding: "0 20px" }}>
        {/* Input Section */}
        <InputAmount />

        {/* Show Exchange Rate Section */}
        <ExchangeRate />

        {/* Menu for add new rate */}
        <AddRate />
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
