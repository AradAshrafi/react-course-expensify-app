import React from 'react';
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from '../fixtures/expenses'

test("1 expense", () => {
    const check={expenses:[expenses[0]]}
    const wrapper = shallow(<ExpensesSummary {...check}/>);
    expect(wrapper).toMatchSnapshot()
});
//expenses={check} ghalateee

test(" multiple expenses ", () => {
    const check = {expenses : expenses }
    const wrapper = shallow(<ExpensesSummary {...check} />);
    expect(wrapper).toMatchSnapshot()
});