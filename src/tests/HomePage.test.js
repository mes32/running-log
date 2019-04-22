import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../components/App/App';
import { HomePage } from '../components/HomePage/HomePage';

describe('<HomePage />', () => {
    // const homePage = render(<HomePage />);

    // test('renders 1 <WorkoutForm />', () => {
    //     expect(homePage.find('WorkoutForm').length).toBe(1);
    // });

    // test('renders 1 <WorkoutList />', () => {
    //     expect(homePage.find('WorkoutList').length).toBe(1);
    // });
    test('1 === 1', () => {
        expect(1).toBe(1);
    })
});
