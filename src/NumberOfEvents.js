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

    render() {
        return (
            <div className="numEvents">
                <p>Number of events</p>
                <input
                    type="text"
                    className="numInput"
                    value={this.state.inputNumEvents}
                    // onKeyDown={onKeyDown}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;