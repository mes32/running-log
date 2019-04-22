import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import WorkoutRow from '../components/WorkoutList/WorkoutRow/WorkoutRow';
import Workout from '../classes/Workout';

const databaseEntry = {
    id: 1,
    date: '2000-01-01',
    distance_miles: 0,
    duration_minutes: 0,
    incline_percent: 0
};
const sampleWorkout = new Workout(databaseEntry);

describe('<WorkoutRow />', () => {
    test('has exactly 1 <tr>', () => {
        const wrapper = shallow(<WorkoutRow workout={sampleWorkout} />);
        expect(wrapper.find('tr').length).toBe(1);
    });
    test('has exactly 5 <td>', () => {
        const wrapper = shallow(<WorkoutRow workout={sampleWorkout} />);
        expect(wrapper.find('tr').children('td').length).toBe(5);
    });
});
