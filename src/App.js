import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';

import './App.css';
import './nprogress.css';

class App extends Component {
    state = {
        events: [],
        locations: [],
        numEvents: 32,
    }

    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({
                    events,
                    locations: extractLocations(events),
                });
            }
        });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    updateNumEvents = (val) => {
        this.setState({
            numEvents: val,
        });
    }

    updateEvents = (location) => {
        getEvents().then((events) => {
            const locationEvents = (location === 'all') ?
                events :
                events.filter((event) => event.location === location);
            this.setState({
                events: locationEvents,
            });
        });
    }

    render() {
        return (
            <div className="App">
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents updateNumEvents={this.updateNumEvents} />
                <EventList events={this.state.events} numEvents={this.state.numEvents} />
                {!navigator.onLine && (<OfflineAlert text="You are offline, so we are using cached data" />)}
            </div>
        );
    }
}

export default App;