import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from './Kitchen';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

describe('Component Kitchen', () => {
  it('renders without crashing', () => {
    expect(shallow(<Kitchen />)).toBeTruthy();
  });
  it('renders correct classNames', () => {
    const component = shallow(<Kitchen />);
    expect(component.hasClass('component')).toBe(true);
  });
  it('renders Table elements', () => {
    const component = shallow(<Kitchen />);
    expect(component.find(Table).length).toBe(1);
    expect(component.find(TableHead).length).toBe(1);
    expect(component.find(TableRow).length).toBe(7);
    expect(component.find(TableCell).length).toBe(28);
  });
});
