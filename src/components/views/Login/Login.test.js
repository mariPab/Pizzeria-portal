import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Component Login', () => {
  it('renders without crashing', () => {
    expect(shallow(<Login />)).toBeTruthy();
  });
});
