import React, { Component, PropTypes } from 'react';

export default class AddPlayerForm extends Component {
    static propTypes: {
        onAdd: React.PropTypes.func.isRequired,
    };

    state = {
        name: ''
    };

    onNameChange = (e) => {
        console.log('onNamechange', e.target.value);
        this.setState({
            name: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name)
        this.setState({
            name: ""
        })
    };

    render() {
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
}