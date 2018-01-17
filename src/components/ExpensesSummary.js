import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import expenseTotal from '../selectors/expenses-total';
import getVisibleExpense from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = props => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    viewing <span>{props.expenses.length}</span> {expenseWord}{' '}
                    totalling{' '}
                    <span>
                        {numeral(expensesTotal(props.expenses) / 100).format(
                            '&0,0.00'
                        )}
                    </span>
                </h1>
                <div className = "page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapState2Props = state => {
    return {
        expenses: getVisibleExpense(state.expenses, state.filters)
    };
};

export default connect(mapState2Props)(ExpensesSummary);
