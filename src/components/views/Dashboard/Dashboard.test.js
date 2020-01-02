import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Component Dashboard', () => {
  it('renders without crashing', () => {
    expect(shallow(<Dashboard />)).toBeTruthy();
  });
});
