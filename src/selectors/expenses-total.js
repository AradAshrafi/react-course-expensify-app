export default (expenses = []) => {
    let amount = 0;
    expenses.map(element => {
        amount += element.amount;
    });

    return amount;
};
