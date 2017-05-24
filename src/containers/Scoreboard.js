import React, { Component } from 'react';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

export default class Scoreboard extends Component {

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

  getDefaultProps() {
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
  };

  render() {
    return (
      <div className="application">
        <div className="panel panel-primary">
          <Header title={this.props.title} players={this.state.players} />
          <ul className="players list-group">
            {this.state.players.map(function (player, index) {
              return (
                <Player onScoreChange={function (delta) { this.onScoreChange(index, delta) }.bind(this)}
                  onRemove={function () { this.onRemovePlayer(index) }.bind(this)}
                  name={player.name} score={player.score} key={player.id} />
              );
            }.bind(this))}
          </ul>
          <AddPlayerForm onAdd={this.onPlayerAdd} />
        </div>

      </div>
    )
  };
}