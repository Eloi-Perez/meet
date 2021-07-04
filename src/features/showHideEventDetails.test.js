import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../components/Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the main page is open', () => { });

        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
            AppWrapper.setState({ showWelcomeScreen: false });
        });

        then('all the events should be collapsed', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".event-description")).toHaveLength(0);
        });
    });

    test('User can expand an event to show its details', ({ given, when, then }) => {
        let AppWrapper;
        given('a collapsed element', () => {
            AppWrapper = mount(<App />);
        });

        when('the user click on the collapsed element', () => {
            AppWrapper.update();
            AppWrapper.find(".details-btn").at(0).simulate("click");
        });

        then('the element should expand', () => {
            expect(AppWrapper.find(".event-description")).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('a expanded element', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.setState({ showDetails: true});
        });

        when('the user click on the expanded element', () => {
            // AppWrapper.update();
            EventWrapper.find(".details-btn").at(0).simulate("click");

        });

        then('the element should collapse', () => {
            expect(EventWrapper.find(".event-description")).toHaveLength(0);
        });
    });
});