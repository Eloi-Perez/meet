import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';

import Event from '../Event';

import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the main page is open', () => { });

        let EventListWrapper;
        when('the user opens the app', () => {
            EventListWrapper = mount(<EventList events={mockData} />);
        });

        then('it should show the first 32 of them', () => {
            EventListWrapper.update();
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user click on button and edit it to another number', () => {
            AppWrapper.update();
            AppWrapper.find('.numInput').simulate('change', {
                target: { value: 5 }
            });
        });

        then('it should be shown the quantity of events specified in button', () => {
            expect(AppWrapper.find(Event)).toHaveLength(5);
        });
    });
});