import React, { Component } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './components/Alert';
import WelcomeScreen from './WelcomeScreen';

import './App.css';
import './nprogress.css';

class App extends Component {
    state = {
        events: [],
        locations: [],
        numEvents: 32,
        showWelcomeScreen: undefined
    }

    async componentDidMount() {
        this.mounted = true;
        const accessToken = localStorage.getItem('access_token');
        const isTokenValid = ((await checkToken(accessToken)).error === 'invalid_token') ? false : true;
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get("code");
        // If code in url or access_token is valid dont show welcome screen else show welcome screen for authorization
        this.setState({ showWelcomeScreen: !(code || isTokenValid) });
        // console.log('code: ' + code); console.log('isTokenValid: ' + isTokenValid); console.log(await checkToken(accessToken));
        // if ((code || isTokenValid) && this.mounted) {
            getEvents().then((events) => {
                if (this.mounted) {
                    this.setState({
                        events,
                        locations: extractLocations(events),
                    });
                }
            });
        // }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    getData = () => {
        const { locations, events } = this.state;
        const data = locations.map((location) => {
            const number = events.filter((event) => event.location === location).length
            const city = location.split(', ').shift()
            return { city, number };
        })
        return data;
    };

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

        if (this.state.showWelcomeScreen === undefined) return <div className="App" />
        let eventsSliced = this.state.events.slice(0, this.state.numEvents);
        return (
            <div className="App">
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents updateNumEvents={this.updateNumEvents} />
                <EventList eventsSliced={eventsSliced} />
                <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
                {!navigator.onLine && (<OfflineAlert text="You are offline, so you are viewing cached data" />)}
            </div>
        );
    }
}

export default App;