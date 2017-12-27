import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state' , ()=>{
    const state = expensesReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove by id ', ()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expensesReducer(expenses , action);
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove anything if id not found ', ()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id:-1
    };
    const state = expensesReducer(expenses , action);
    expect(state).toEqual(expenses)
})

test ('should add an expense',()=>{
    const newExpense = {
        description : 'hey',
        id : '4',
    }
    const action = {
        type : 'ADD_EXPENSE',
        expense:newExpense
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,newExpense])
})

test('should edit an expense ' , () => {
    const newAmount=1000
    const action = {
        type : 'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{amount : newAmount}
    }
    const state = expensesReducer ( expenses , action )
    expect(state[1].amount).toBe(newAmount)
});

test('should not edit an expense if id not found' , () => {
    const newAmount=1000
    const action = {
        type : 'EDIT_EXPENSE',
        id:expenses[1].id + 10,
        updates:{amount : newAmount}
    }
    const state = expensesReducer ( expenses , action )
    expect(state).toEqual(expenses)//take care not to use toBe
});