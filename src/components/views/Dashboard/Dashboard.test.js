import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

describe('Component Dashboard', () => {
  it('renders without crashing', () => {
    expect(shallow(<Dashboard />)).toBeTruthy();
  });
  it('renders Table elements', () => {
    const component = shallow(<Dashboard />);
    expect(component.find(Table).length).toBe(2);
    expect(component.find(TableHead).length).toBe(2);
    expect(component.find(TableRow).length).toBe(14);
    expect(component.find(TableCell).length).toBe(42);
  });
});
