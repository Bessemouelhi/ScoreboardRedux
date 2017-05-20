import React, { PropTypes } from 'react';

const Stats = props => {
  var totalPlayers = props.players.length;
  var totalPoints = props.players.reduce(function (total, player) {
    return total + player.score;
  }, 0);

  return (
    <div className="stats col-sm-3">
      <p className="display text-center">Players : {totalPlayers}</p>
      <p className="display text-center">Total Points : {totalPoints}</p>
    </div>
  )
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired
}

export default Stats;
