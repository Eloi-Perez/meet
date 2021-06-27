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
        console.log('1 ' + navigator.onLine);
        this.mounted = true; //// Why is necessary?????
        console.log('2 ' + navigator.onLine);
        const accessToken = localStorage.getItem('access_token');
        console.log('3 ' + navigator.onLine);
        const isTokenValid = ((await checkToken(accessToken)).error === 'invalid_token') ? false : true;
        console.log('4 ' + navigator.onLine);
        const searchParams = new URLSearchParams(window.location.search);
        console.log('5 ' + navigator.onLine);
        const code = searchParams.get("code");
        console.log('6 ' + navigator.onLine);
        // If code in url or access_token is valid dont show welcome screen else show welcome screen for authorization
        this.setState({ showWelcomeScreen: !(code || isTokenValid) });
        console.log('7 ' + navigator.onLine); // this never get executed when offline
        if ((code || isTokenValid) && this.mounted) { //no code because that is only use when returned from google login, token is not valid because no conetion to check
            console.log('getting events!');
            getEvents().then((events) => {      //not being executed when offline                
                if (this.mounted) {
                    this.setState({
                        events,
                        locations: extractLocations(events),
                    });
                }
            });
        } else if (!navigator.onLine && this.mounted) {
            console.log('getting events! (second if)');
            getEvents().then((events) => {
                if (this.mounted) {
                    this.setState({
                        events,
                        locations: extractLocations(events),
                    });
                }
            });
        } else if (!navigator.onLine) {
            console.log('getting events! (third if)');
            getEvents().then((events) => {
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