import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from './Kitchen';

describe('Component Kitchen', () => {
  it('renders without crashing', () => {
    expect(shallow(<Kitchen />)).toBeTruthy();
  });
});
