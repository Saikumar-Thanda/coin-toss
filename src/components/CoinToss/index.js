import {Component} from 'react'

import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headsImageUrl, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const toss = Math.floor(Math.random() * 2)
    const {headsCount, tailsCount} = this.state

    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    let tossImage = ''

    if (toss === 0) {
      latestHeadsCount += 1
      tossImage = headsImageUrl
    } else {
      latestTailsCount += 1
      tossImage = tailsImageUrl
    }

    this.setState({
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
      tossResultImage: tossImage,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
