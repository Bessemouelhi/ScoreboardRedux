import React, { PropTypes } from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = (props) => {
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
  players: PropTypes.array.isRequired
}

export default Header;