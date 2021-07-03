import React, { Component } from 'react';
import { ErrorAlert } from '../components/Alert';

class NumberOfEvents extends Component {
    state = {
        inputNumEvents: 32,
        infoText: ''
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value > 0 && value < 51) {
            this.setState({
                inputNumEvents: value,
                infoText: ''
            });
            this.props.updateNumEvents(value);
        } else {
            this.setState({
                inputNumEvents: value,
                infoText: 'Select a number from 1 to 50'
            });
        }
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
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}

export default NumberOfEvents;