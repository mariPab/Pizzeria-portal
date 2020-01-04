import React from 'react';
import { shallow } from 'enzyme';
import CustomTable from './CustomTable';
import MaterialTable from 'material-table';

const mockProps = {
  title: 'table title',
  data: [
    {title: 'Name', field: 'name'},
    {title: 'Surname', field: 'surname'}],
  columns: [
    {name: 'Anna', surname: 'Dean'},
    {name: 'Robert', surname: 'Rogers'},
  ],
  editable: true,
};

describe('Component CustomTable', () => {
  it('renders without crashing', () => {
    expect(shallow(<CustomTable {...mockProps}/>)).toBeTruthy();
  });
  it('throws error without props',() => {
    expect(() => shallow(<CustomTable />)).toThrow();
  });
  it('renders MaterialTable', () => {
    expect(shallow(<CustomTable {...mockProps}/>).find(MaterialTable).length).toEqual(1);
  });
  it('transfers title to MaterialTable', () => {
    const wrapper = shallow(<CustomTable title={mockProps.title} {...mockProps}/>);
    const renderedTitle = wrapper.find(MaterialTable).prop('title');
    expect(renderedTitle).toEqual(mockProps.title);
  });
  it('transfers columns & data to MaterialTable', () => {
    const wrapper = shallow(<CustomTable columns={mockProps.columns} data={mockProps.data} {...mockProps}/>);

    const renderedColumns = wrapper.find(MaterialTable).prop('columns');
    expect(renderedColumns).toEqual(mockProps.columns);

    const renderedData = wrapper.find(MaterialTable).prop('data');
    expect(renderedData).toEqual(mockProps.data);
  });
});
