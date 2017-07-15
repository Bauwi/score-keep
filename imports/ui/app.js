import React, {Component} from 'react'
import propTypes from 'prop-types'

import TitleBar from './title_bar'
import AddPlayer from './add_player'
import PlayersList from './players_list'


export default class App extends Component {
  render () {
    const {players, title} = this.props
    return (
      <div>
        <TitleBar title={title}  subtitle="Created by Beauwie"/>
        <div className="wrapper">
          <PlayersList players={players}/>
          <AddPlayer/>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  title: propTypes.string.isRequired,
  players: propTypes.array.isRequired
}
