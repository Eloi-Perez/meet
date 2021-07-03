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
                <button className="details-btn" onClick={() => this.setState({ showDetails: !this.state.showDetails })}>
                {this.state.showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.showDetails && (
                    <div className="event-details">
                        <p className="event-description">{event.description}</p>
                        <p><a href={event.htmlLink} rel="noreferrer" target="_blank">Event in Google Calendar</a></p>
                    </div>
                )}
            </div>
        )
    }
}
export default Event;