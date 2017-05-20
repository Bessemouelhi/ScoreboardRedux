import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';
import AddPlayerForm from '../components/AddPlayerForm';

const INITIAL_STATE = {
  players: [
    {
      name: 'Jim Hoskins',
      score: 31,
    },
    {
      name: 'Andrew Chalkley',
      score: 20,
    },
    {
      name: 'Alena Holligan',
      score: 50,
    },
  ],
}

/*function Stats(props) {
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
}*/

function Header(props) {
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
}

/*function Counter(props) {
  return (
    <div className="row">
      <div className="btn-group btn-group-justified" role="group"
        aria-label="Justified button group">
        <a className="btn btn-danger" role="button" onClick={function () { props.onChange(-1); }} >
          <span className="display glyphicon glyphicon-minus" aria-hidden="true"></span>
        </a>
        <a href="#" className="display btn btn-default" disabled="disabled"
          role="button">{props.score}</a>
        <a className="btn btn-success" role="button" onClick={function () { props.onChange(1); }} >
          <span className="display glyphicon glyphicon-plus" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  )
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
}*/

function Player(props) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="title col-xs-8">
          <a className="btn btn-danger btnRemove" onClick={props.onRemove} >
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </a>
          {"  "}{props.name}
        </div> {/*JIM HOSKINS*/}
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
}

/*var AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  getInitialState: function () {
    return {
      name: "",
    };
  },

  onNameChange: function (e) {
    console.log('onNamechange', e.target.value);
    this.setState({
      name: e.target.value
    })
  },

  onSubmit: function (e) {
    e.preventDefault();
    this.props.onAdd(this.state.name)
    this.setState({
      name: ""
    })
  },

  render: function () {
    return (
      <div className="addPlayer">
        <form role="form" onSubmit={this.onSubmit} >
          <div className="row">
            <div className="col-xs-12">
              <div className="input-group input-group-lg">
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange}
                  placeholder="Add a player here" />
                <div className="input-group-btn">
                  <button type="submit" className="btn">Add</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
})*/

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