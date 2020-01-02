import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />)).toBeTruthy();
  });
  it('renders links to views', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Route').length).toBe(5);
  });
});

