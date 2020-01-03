import React from 'react';
import { shallow } from 'enzyme';
import PageNav from './PageNav';
import Button from '@material-ui/core/Button';

describe('Component PageNav', () => {
  it('renders without crashing', () => {
    expect(shallow(<PageNav />)).toBeTruthy();
  });
  it('renders Buttons', () => {
    expect(shallow(<PageNav />).find(Button).length).toEqual(5);
  });
});
