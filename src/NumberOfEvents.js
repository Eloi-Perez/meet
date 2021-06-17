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
    };

    render() {
        // const { events } = this.props;
        return (
            <div className="numEvents">
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