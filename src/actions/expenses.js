// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE

// {
//   description = '',
//   note = '',
//   amount = 0,
//   createdAt = 0
// } = {}

export const addExpense = expense => ({
    type: 'ADD_EXPENSE',
    expense
    // id: uuid(),
});

export const startAddExpense = (expenseData = {}) => {
    return x => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        database
            .ref('expenses')
            .push(expense)
            .then(ref => {
                x(
                    addExpense({
                        id: ref.key,
                        ...expense
                    })
                );
            });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSES

export const setExpense = expenses => {
    return {
        type: 'SET_EXPENSES',
        expenses
    };
};

export const startSetExpenses = () => {
    return toDispatch => {
        return database
            .ref('expenses')
            .once('value')
            .then(snapshot => {
                const expenses = [];
                snapshot.forEach(element => {
                    expenses.push({
                        id:element.key,
                        ...element.val()
                    });
                });
                toDispatch(setExpense(expenses));
            });
    };
};
