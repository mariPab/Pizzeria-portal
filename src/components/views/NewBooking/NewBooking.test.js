import React from 'react';
import { shallow } from 'enzyme';
import NewBooking from './NewBooking';

describe('Component NewBooking', () => {
  it('renders without crashing', () => {
    expect(shallow(<NewBooking />)).toBeTruthy();
  });
});
