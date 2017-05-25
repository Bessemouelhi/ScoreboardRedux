import React, { PropTypes } from 'react';
import Counter from './Counter';

const Player = (props) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="title col-xs-8">
          <a className="btn btn-danger btnRemove" onClick={() => props.removePlayer(props.index)} >
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </a>
          {"  "}{props.name}
        </div> {/*JIM HOSKINS*/}
        <div className="col-xs-4">
          <Counter
            index={props.index}
            updatePlayerScore={props.updatePlayerScore}
            score={props.score}
          />
        </div>
      </div>
    </li>
  )
}

Player.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
}

export default Player;