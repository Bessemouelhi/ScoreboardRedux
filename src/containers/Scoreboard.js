import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends Component {

  state = {
    players: [
      {
        id: 1,
        name: "John Hopkins",
        score: 54
      },
      {
        id: 2,
        name: "Bruce Smith",
        score: 59
      },
      {
        id: 3,
        name: "Linda Afflek",
        score: 65
      },
    ],
  };

  /*getDefaultProps() {
    return {
      title: 'Scoreboard'
    };
  };

  onScoreChange = (index, delta) => {
    console.log('onScoreChange', index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onPlayerAdd = (name) => {
    console.log('onPlayerAdd', name, this.state.players.length + 1);
    this.state.players.push({
      name: name,
      score: 0,
      id: this.state.players.length + 1
    })
    this.setState(this.state)
  };

  onRemovePlayer = (index) => {
    console.log('onRemovePlayer', index);
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };*/

  static PropTypes = {
    players: PropTypes.array.isRequired
  }

  render() {
    const {dispatch, players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.id}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ));

    return (
      <div className="application">
        <div className="panel panel-primary">
          <Header players={players} />
          <ul className="players list-group">
            {playerComponents}
          </ul>
          <AddPlayerForm addPlayer={addPlayer} />
        </div>

      </div>
    )
  };
}

const mapStateToProps = state => (
  {
    players: state
  }
);

export default connect(mapStateToProps)(Scoreboard);