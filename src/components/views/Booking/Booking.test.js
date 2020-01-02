import React from 'react';
import { shallow } from 'enzyme';
import Booking from './Booking';

const mockProps = {
  match: {
    params: {
      param: 'param1',
    },
  },
};

describe('Component Booking', () => {
  it('renders without crashing', () => {
    expect(shallow(<Booking {...mockProps}/>)).toBeTruthy();
  });
});
