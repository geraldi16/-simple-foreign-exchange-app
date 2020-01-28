import React from 'react'
import { connect } from 'react-redux'

import { getLatestList } from '../actions/exchange'

class ExchangePage extends React.PureComponent {
    componentDidMount() {
        // 
        this.props.getLatestList()
    }

    render(){
        console.log(this.props.exchangeRates)
        return (<div>Hello World!</div>)
    }
}

// redux configuration
const mapStateToProps = (state) => {
    const { base, exchangeRates } = state.exchange
  
    return {
      base,
      exchangeRates
    }
  }
  
// no need to use dispatch since it handled inside function using thunk middleware
const mapDispatchToProps = {
    getLatestList
}

// connect component with redux
export default connect(
mapStateToProps,
mapDispatchToProps
)(ExchangePage)