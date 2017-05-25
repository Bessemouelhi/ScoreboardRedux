import React, { Component, PropTypes } from 'react';

export default class Stopwatch extends Component {
    state = {
        running: false,
        elapsedTime: 0,
        previousTime: 0,
    };

    componentDidMount() {
        this.interval = setInterval(this.onTick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onTick = () => {
        //console.log('onTick')
        if (this.state.running) {
            var now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
            });
        }
    };

    onStart = () => {
        this.setState({
            running: true,
            previousTime: Date.now(),
        })
    };

    onStop = () => {
        this.setState({ running: false })
    };

    onReset = () => {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now(),
        })
    };

    render() {
    var seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="col-sm-3">
        <p className="display text-center">{seconds}</p>
        <div className="btn-group btn-group-justified center-block" role="group"
          aria-label="Justified button group">
          { this.state.running ?
            <a onClick={this.onStop} className="btn btn-default" role="button">STOP</a>
            :
            <a onClick={this.onStart} className="btn btn-default" role="button">START</a> }
          <a onClick={this.onReset} className="btn btn-default" role="button">RESET</a>
        </div>
      </div>
    )
  }
}