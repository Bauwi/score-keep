import React, {Component} from 'react'
import propTypes from 'prop-types'
import FlipMove from 'react-flip-move'

import {Players} from '../api/players'
import Player from './player'



export default class PlayersList extends Component {

  renderPlayers() {
    if(this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add a player to get started!</p>
        </div>
      )
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player}/>
      })
    }

  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}

PlayersList.propTypes = {
  players: propTypes.array.isRequired
}


{/*import React, {Component} from 'react'
import {Players} from '../api/players'
import Player from './player'
import {Tracker} from "meteor/tracker"

export default class PlayersList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: Players.find().fetch()
    }
    this.renderPlayers = this.renderPlayers.bind(this)
  }

  componentDidMount() {
    Tracker.autorun(() => {
      this.setState({
        ...this.state,
        players: Players.find().fetch()
      })
    })
  }

  renderPlayers() {
    return this.state.players.map((player) => {
      return <Player key={player._id} player={player}/>
    })
  }

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    )
  }
}
}*/}
