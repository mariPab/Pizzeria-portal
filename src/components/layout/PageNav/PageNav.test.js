import React from 'react';
import { shallow } from 'enzyme';
import PageNav from './PageNav';

describe('Component PageNav', () => {
  it('renders withour crashing', () => {
    expect(shallow(<PageNav />)).toBeTruthy();
  });
});
