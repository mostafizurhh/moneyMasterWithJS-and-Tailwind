function stringValueConverter(inputFieldId) {

    const inputField = document.getElementById(inputFieldId);
    const inputFieldStringValue = inputField.value;
    const inputFieldNumberValue = parseFloat(inputFieldStringValue);
    return inputFieldNumberValue;
}


document.getElementById('calculateBtn').addEventListener('click', function () {
    const totalIncome = stringValueConverter('income');
    const foodExpense = stringValueConverter('food');
    const rentExpense = stringValueConverter('rent');
    const clothExpense = stringValueConverter('clothes');

    if (isNaN(totalIncome, foodExpense, rentExpense, clothExpense)) { return alert('Please enter valid numbers to all field'); }

    const totalCost = foodExpense + rentExpense + clothExpense;
    const balanceTotal = totalIncome - (foodExpense + rentExpense + clothExpense);

    const totalExpenses = document.getElementById('totalExpense');
    totalExpenses.value = totalCost;

    const myBalance = document.getElementById('balance')
    myBalance.value = balanceTotal;
})

document.getElementById('saveBtn').addEventListener('click', function () {
    const savingPercentage = stringValueConverter('save');
    const newpercentage = savingPercentage / 100;
    if (isNaN(savingPercentage)) { return alert('Please enter valid number'); }

    const totalIncome = stringValueConverter('income');
    const foodExpense = stringValueConverter('food');
    const rentExpense = stringValueConverter('rent');
    const clothExpense = stringValueConverter('clothes');

    if (isNaN(totalIncome, foodExpense, rentExpense, clothExpense)) { return alert('Please enter valid numbers to all field'); }

    const balanceTotal = totalIncome - (foodExpense + rentExpense + clothExpense);
    const myBalance = document.getElementById('balance')
    myBalance.value = balanceTotal;

    const savingAmount = totalIncome * newpercentage;
    const mySavingAmount = document.getElementById('saving');
    mySavingAmount.value = savingAmount;

    const remainingBalance = document.getElementById('remaining');
    remainingBalance.value = balanceTotal - savingAmount;
})