import React, { Component } from 'react'
import './Stocks.css'
import moment from 'moment'

export default class Stocks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stockSymbol: '',
      price: '',
      loading: false
    }

    this.searchStock = this.searchStock.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const value = e.target.value

    this.setState({ stockSymbol: value })
  }

  async searchStock(e) {
    e.preventDefault()

    const { stockSymbol } = this.state

    const searchString = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=ZT74NC1PP39HLQRD`
    this.setState({ loading: true })
    try {
      const response = await fetch(searchString)
      if (response.status !== 200) {
        console.log(`error occurred ${response.status}`)
      } else {
        // This getting the date solution won't work well for all browsers
        const data = await response.json()
        const currentDate = moment()
          .add(-1, 'days')
          .format('YYYY-MM-DD')
        const price = data['Time Series (Daily)'][currentDate]['4. close']

        this.setState({ price })
      }
    } catch {
      this.setState({ price: 'Invalid stock symbol' })
    }
    this.setState({ loading: false })
  }

  render() {
    const { stockSymbol, price, loading } = this.state

    return (
      <div className="section-dark">
        <h1 className="banner-tagline">Find a Stock</h1>

        {loading ? (
          <p className="tagline" style={{ height: '100px' }}>
            Loading...
          </p>
        ) : (
          <form action="" className="stock-form">
            <input
              type="text"
              value={stockSymbol}
              placeholder="MSFT"
              onChange={this.handleChange}
              className="stock-input"
            />
            <button
              className="primary-btn"
              id="stock-search-btn"
              style={{ width: '50%', marginTop: '1rem' }}
              onClick={this.searchStock}
            >
              Go
            </button>
          </form>
        )}

        <p className="main-text">{price}</p>
      </div>
    )
  }
}
