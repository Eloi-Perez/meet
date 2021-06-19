import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    
    render() {
        const { events } = this.props;
        const { numEvents } = this.props;
        let eventsSliced = events.slice(0, numEvents);
        return (
            <ul className="EventList">
                {eventsSliced.map(event =>
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
        );
    }
}

export default EventList;