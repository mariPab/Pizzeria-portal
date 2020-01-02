import React from 'react';
import { shallow } from 'enzyme';
import PageNav from './PageNav';

describe('Component PageNav', () => {
  it('renders without crashing', () => {
    expect(shallow(<PageNav />)).toBeTruthy();
  });
  it('renders NavLinks', () => {
    const wrapper = shallow(<PageNav />);
    expect(wrapper.find('NavLink').length).toEqual(5);
  });
});
