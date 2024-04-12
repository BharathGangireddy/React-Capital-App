import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeElement = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getActiveCountry = () => {
    const {activeCapitalId} = this.state
    const getCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeCapitalId,
    )

    return getCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getActiveCountry(activeCapitalId)
    return (
      <div className="capitals-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              className="dropdown"
              onChange={this.onChangeElement}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="dropdown">is capital of which country?</label>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
