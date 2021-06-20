import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        inputNumEvents: 32,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            inputNumEvents: value
        });
        this.props.updateNumEvents(value);
    };

    handleClick = (e) => {
        e.target.select();
    };

    render() {
        return (
            <div className="numEvents">
                <p>Number of events  </p>
                <input
                    type="number"
                    className="numInput"
                    value={this.state.inputNumEvents}
                    // onKeyDown={onKeyDown}
                    onChange={this.handleInputChanged}
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default NumberOfEvents;