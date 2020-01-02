import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

const mockProps = {
  match: {
    params: {
      param: 'param1',
    },
  },
};

describe('Component Order', () => {
  it('renders without crashing', () => {
    expect(shallow(<Order {...mockProps}/>)).toBeTruthy();
  });
});
