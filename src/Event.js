import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
        };
    }
    render() {
        const { event } = this.props;
        return (
            <div className="event-container">
                <h3>{event.summary}</h3>
                <button onClick={() => this.setState({showDetails: !this.state.showDetails})}>Show Details</button>
                {this.state.showDetails && (
                    <div className="event-description">{event.description}</div>
                )}
            </div>
        )
    }
}
export default Event;