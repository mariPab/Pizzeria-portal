import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';
import Button from '@material-ui/core/Button';

describe('Component Waiter', () => {
  it('renders without crashing', () => {
    expect(shallow(<Waiter />)).toBeTruthy();
  });
  it('renders Links', () => {
    const wrapper = shallow(<Waiter />);
    expect(wrapper.find(Button).length).toEqual(9);
  });
});
