import React from 'react';
import { shallow } from 'enzyme';
import Event from './Event';

const mockProps = {
  match: {
    params: {
      param: 'param1',
    },
  },
};

describe('Component Event', () => {
  it('renders without crashing', () => {
    expect(shallow(<Event {...mockProps}/>)).toBeTruthy();
  });
});
