import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from './MainLayout';

describe('Component MainLayout', () => {
  it('renders withour crashing', () => {
    expect(shallow(<MainLayout />)).toBeTruthy();
  });
});
