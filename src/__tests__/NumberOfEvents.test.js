import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
    });

    test('render selector with input 32', () => {
        expect(NumberOfEventsWrapper.find('.numEvents input')).toHaveLength(1);
        expect(NumberOfEventsWrapper.find('.numInput').prop('value')).toBe(32);
    });
    // test('typed input to state', () => { //-> in App.test.js
    
    // });
});