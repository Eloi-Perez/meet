import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
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
        // console.log((await checkToken(accessToken)).error);
        // console.log('TOKEN is ' + isTokenValid);
        const searchParams = new URLSearchParams(window.location.search);
        const code = searchParams.get("code");
        console.log('code: ' + await code);
        // If code in url or access_token is valid dont show welcome screen else show welcome screen for authorization
        this.setState({ showWelcomeScreen: !(code || isTokenValid) });
        if ((code || isTokenValid) && this.mounted) {
            getEvents().then((events) => {      //not being executed when offline
                console.log('getting events!')
                if (this.mounted) {
                    this.setState({
                        events,
                        locations: extractLocations(events),
                    });
                }
            });
        }
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

        // if (this.state.showWelcomeScreen === undefined) return <div className="App" />

        return (
            <div className="App">
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents updateNumEvents={this.updateNumEvents} />
                <EventList events={this.state.events} numEvents={this.state.numEvents} />
                {!navigator.onLine && (<OfflineAlert text="You are offline, so we are using cached data" />)}
                <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
            </div>
        );
    }
}

export default App;