import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../components/EventList';
import Event from '../components/Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
    let EventListWrapper;
    beforeAll(async () => {
        EventListWrapper = shallow(<EventList eventsSliced={mockData} />);
    });

    test('render correct number of events', () => {
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });

});