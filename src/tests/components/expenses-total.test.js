import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test("should return 0 because there is no input ", ()=>{
    const action = selectExpensesTotal();
    expect(action).toBe(0);
});

test("should return 195 because it's gum's expense " , ()=>{
    const action = selectExpensesTotal([expenses[0]]);
    expect(action).toBe(195);
});

test("should return 114195 because it's total ", ()=>{
    const action = selectExpensesTotal(expenses);
    expect(action).toBe(114195);
});

