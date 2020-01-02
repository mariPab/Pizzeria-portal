import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';

describe('Component Waiter', () => {
  it('renders without crashing', () => {
    expect(shallow(<Waiter />)).toBeTruthy();
  });
  it('renders Links', () => {
    const wrapper = shallow(<Waiter />);
    expect(wrapper.find('Link').length).toEqual(2);
  });
});
