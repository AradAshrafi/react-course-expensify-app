import React from "react";
import { connect } from "react-redux";
import numeral from 'numeral';
import expenseTotal from "../selectors/expenses-total";
import getVisibleExpense from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = props => {
    const expenseWord=props.expenses.length===1 ? 'expense' : 'expenses';
    return(
        <h2>
            viewing {props.expenses.length} {expenseWord} totalling{" "}
            {numeral(expensesTotal(props.expenses)/100).format('&0,0.00')}
        </h2>
    )
};

const mapState2Props = state => {
    return {
        expenses: getVisibleExpense(state.expenses , state.filters)
    };
};

export default connect(mapState2Props)(ExpensesSummary);
