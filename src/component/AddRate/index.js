import React from "react";
import { Col } from "react-flexbox-grid";
import { connect } from "react-redux";

import Style from "./style";
import { addShowedList } from "../../actions/exchange";

/**
 * Component class for adding new exchange rate to display.
 */
class AddRate extends React.PureComponent {
  state = {
    showInput: false,
    currencyInput: ""
  };

  handleChange = e => {
    this.setState({ currencyInput: e.target.value });
  };

  /**
   * Add new rate to the page.
   *
   * @param {string} currency - currency symbol
   */
  addRate = () => {
    const { notShowedRates } = this.props;
    const input = this.state.currencyInput.toUpperCase();
    // check if input is available in notShowedRates array
    if (notShowedRates.includes(input)) {
      this.props.addShowedList(input);
    } else {
      alert(`Currency ${input} is not found!`);
    }

    this.setState({ currencyInput: "" });
  };

  render() {
    return (
      <Style.Wrapper>
        {/* Input Section */}
        <Col xs={9}>
          <Style.Autocomplete
            options={this.props.notShowedRates}
            freeSolo
            renderInput={params => (
              <Style.Input
                {...params}
                onChange={this.handleChange}
                onSelect={this.handleChange}
              />
            )}
          />
        </Col>
        {/* Submit Button Section */}
        <Col xs={3} style={{ padding: 0 }}>
          <Style.Submit onClick={this.addRate}>Add Rate</Style.Submit>
        </Col>
      </Style.Wrapper>
    );
  }
}

// redux configuration
const mapStateToProps = state => {
  const { notShowedRates } = state.exchange;

  return {
    notShowedRates
  };
};

// no need to use dispatch since it handled inside function using thunk middleware
const mapDispatchToProps = {
  addShowedList
};

// connect component with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRate);
