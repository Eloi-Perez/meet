import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../components/EventList';
import Event from '../components/Event';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';


describe('<App /> component, unit tests', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />); //render App
        AppWrapper.setState({ showWelcomeScreen: false });
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1); // to exist
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

describe('<App /> integration tests', () => {
    test('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        AppWrapper.setState({ showWelcomeScreen: false });
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });
    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });
    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });
    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });

    test('update number of events state in app', async () => {
        const AppWrapper = mount(<App />);
        AppWrapper.find('.numInput').simulate('change', {
            target: { value: 5 }
        });
        expect(AppWrapper.find('.numInput').prop('value')).toBe(5);
        expect(AppWrapper.state('numEvents')).toBe(5);
        AppWrapper.unmount();
    });
    test('show number of events selected', async () => {
        const AppWrapper = mount(<App />);
        AppWrapper.update();
        await AppWrapper.find('.numInput').simulate('change', {
            target: { value: 5 }
        });
        AppWrapper.update();
        // console.log(AppWrapper.find(Event).debug());
        expect(AppWrapper.find(Event)).toHaveLength(5);
        AppWrapper.unmount();
    });
});