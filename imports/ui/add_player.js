import React, {Component} from 'react';
import {Players} from "../api/players";

export default class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    debugger;
    if (playerName) {
      e.target.playerName.value = "";
      Players.insert({name: playerName, score: 0});
    }
  };
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name..."/>
          <button className="button">Add Player</button>
        </form>
      </div>

    );
  }
}
