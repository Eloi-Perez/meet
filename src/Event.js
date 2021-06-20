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
        let date = new Date(event.start.dateTime)
        return (
            <div className="event-container">
                <h3>{event.summary}</h3>
                <p>{date.toString()}</p>
                <p>{event.location}</p>
                <button onClick={() => this.setState({showDetails: !this.state.showDetails})}>Show Details</button>
                {this.state.showDetails && (
                    <div className="event-description">
                    <p>{event.description}</p>
                    <p><a href={event.htmlLink}>Event in Google Calendar</a></p>
                    </div>
                )}
            </div>
        )
    }
}
export default Event;