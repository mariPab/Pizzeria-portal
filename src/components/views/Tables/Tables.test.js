import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';

describe('Component Tables', () => {
  it('renders without crashing', () => {
    expect(shallow(<Tables />)).toBeTruthy();
  });
  it('renders Links', () => {
    const wrapper = shallow(<Tables />);
    expect(wrapper.find('Link').length).toEqual(4);
  });
});
