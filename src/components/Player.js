import React, { PropTypes } from 'react';
import Counter from './Counter';

const Player = (props) => {
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
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default Player;