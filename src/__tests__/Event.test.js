import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });
    test('render event', () => {
        expect(EventWrapper.find(".event-container")).toHaveLength(1);
    });
    test('render event summary', () => {
        expect(EventWrapper.find("h3")).toHaveLength(1);
        expect(EventWrapper.find("h3").text()).toEqual(mockData[0].summary);
    });
    test('showDetails false on init', () => {
        expect(EventWrapper.state("showDetails")).toEqual(false);
        expect(EventWrapper.find(".event-description")).toHaveLength(0);
    });
    test('on click show description', () => {
        EventWrapper.find(".event-container button").at(0).simulate("click");
        expect(EventWrapper.state("showDetails")).toEqual(true);
        expect(EventWrapper.find(".event-description")).toHaveLength(1);
        expect(EventWrapper.find(".event-description").text()).toEqual(mockData[0].description);
    });
        test('if open, on click hide description', () => {
        EventWrapper.setState({ showDetails: true});
        EventWrapper.find(".event-container button").at(0).simulate("click");
        expect(EventWrapper.state("showDetails")).toEqual(false);
        expect(EventWrapper.find(".event-description")).toHaveLength(0);
    });
});