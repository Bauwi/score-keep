import React, {Component} from 'react';
import {Players} from "../api/players";
import propTypes from 'prop-types';

export default class Player extends Component {
  render() {
    const {_id, name, score, rank, position} = this.props.player;
    let itemClassName = `item item--position-${rank}`
    return (
      <div className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{name}</h3>
            <p className="player__stats">
            {position} place - {score} points.
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => Players.update(_id, {
              $inc: {
                score: -1
              }
            })}>-</button>
            <button className="button button--round" onClick={() => Players.update(_id, {
              $inc: {
                score: 1
              }
            })}>+</button>
            <button className="button button--round" onClick={() => Players.remove(_id)}>X</button>

          </div>

        </div>
      </div>
    )
  }
}

Player.propTypes = {
  player : propTypes.object.isRequired
}
