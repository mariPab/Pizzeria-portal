import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Component Dashboard', () => {
  it('renders without crashing', () => {
    expect(shallow(<Dashboard />)).toBeTruthy();
  });
  it('renders CustomTable', () => {
    expect(shallow(<Dashboard />).find('CustomTable').length).toEqual(1);
  });
});
