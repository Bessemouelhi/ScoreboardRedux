import React from 'react';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';

const INITIAL_STATE = {
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
}

/*function Header(props) {
  return (
    <div className="panel-heading">
      <div className="row">
        <Stats players={props.players} />
        <div className="title col-sm-6 text-center text-uppercase">{props.title}</div>
        <Stopwatch />
      </div>
    </div>
  )
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
}*/

/*function Player(props) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="title col-xs-8">
          <a className="btn btn-danger btnRemove" onClick={props.onRemove} >
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </a>
          {"  "}{props.name}
        </div>
        <div className="col-xs-4">
          <Counter score={props.score} onChange={props.onScoreChange} />
        </div>
      </div>
    </li>
  )
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
}*/

const Scoreboard = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired
    })).isRequired,
  },

  getDefaultProps: function () {
    return {
      title: 'Scoreboard'
    };
  },

  getInitialState: function () {
    return INITIAL_STATE;
  },

  onScoreChange: function (index, delta) {
    console.log('onScoreChange', index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onPlayerAdd: function (name) {
    console.log('onPlayerAdd', name, this.state.players.length + 1);
    this.state.players.push({
      name: name,
      score: 0,
      id: this.state.players.length + 1
    })
    this.setState(this.state)
  },

  onRemovePlayer: function (index) {
    console.log('onRemovePlayer', index);
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function () {
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
  }
})

export default Scoreboard;