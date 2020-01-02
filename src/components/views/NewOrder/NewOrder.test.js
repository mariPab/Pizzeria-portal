import React from 'react';
import { shallow } from 'enzyme';
import NewOrder from './NewOrder';

describe('Component NewOrder', () => {
  it('renders without crashing', () => {
    expect(shallow(<NewOrder />)).toBeTruthy();
  });
});
