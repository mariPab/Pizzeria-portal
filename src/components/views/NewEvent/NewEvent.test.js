import React from 'react';
import { shallow } from 'enzyme';
import NewEvent from './NewEvent';

describe('Component NewEvent', () => {
  it('renders without crashing', () => {
    expect(shallow(<NewEvent />)).toBeTruthy();
  });
});
