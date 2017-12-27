import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import {shallow} from 'enzyme';

test("should render something in our page",()=>{
    const wrapper=shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})