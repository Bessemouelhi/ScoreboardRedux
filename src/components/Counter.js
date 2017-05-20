import React, { PropTypes } from 'react';

const Counter = props => {
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
}

export default Counter;
