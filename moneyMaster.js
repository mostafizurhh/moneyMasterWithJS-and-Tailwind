function stringValueConverter(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldStringValue = inputField.value;
    const inputFieldNumberValue = parseFloat(inputFieldStringValue);

    // 1. ইনপুট ফিল্ডে নেগেটিভ সংখ্যা দিলে ওয়ার্নিং দিবে 
    if (inputFieldNumberValue < 0) {
        inputField.value = '';
        return alert('value can not be negative')
    }

    return inputFieldNumberValue;
}


document.getElementById('calculateBtn').addEventListener('click', function () {
    const totalIncome = stringValueConverter('income');
    const foodExpense = stringValueConverter('food');
    const rentExpense = stringValueConverter('rent');
    const clothExpense = stringValueConverter('clothes');

    // 2. কোন ফিল্ড এ কোন ভ্যালু না থাকলে বা সংখ্যা ছাড়া কথা লেখা থাকলে ওয়ার্নিং দিবে
    if (isNaN(totalIncome, foodExpense, rentExpense, clothExpense)) { return alert('Please enter valid numbers to all field'); }

    // 3. যদি খরচ ইনকাম এর চাইতে বেশি হয়ে যায়। তাহলে একটা alert দিবে-- ইনকাম এর চাইতে বেশি খরচ করা যাবে না 
    const totalCost = foodExpense + rentExpense + clothExpense;
    if (totalCost > totalIncome) {
        return alert('You can not spend more than your income')
    }
    const balanceTotal = totalIncome - (foodExpense + rentExpense + clothExpense);

    const totalExpenses = document.getElementById('totalExpense');
    totalExpenses.value = totalCost;

    const myBalance = document.getElementById('balance')
    myBalance.value = balanceTotal;
})

document.getElementById('saveBtn').addEventListener('click', function () {
    const savingPercentage = stringValueConverter('save');
    const newpercentage = savingPercentage / 100;

    // কোন ফিল্ড এ কোন ভ্যালু না থাকলে বা সংখ্যা ছাড়া কথা লেখা থাকলে ওয়ার্নিং দিবে
    if (isNaN(savingPercentage)) { return alert('Please enter a valid number'); }

    // 4. যদি save এর পার্সেন্ট এর ঘরে ১০০ এর বেশি বড় কোন সংখ্যা লিখে। তাহলে alert দিবে--১০০% এর বেশি save করা সম্ভব না।
    if (savingPercentage > 100) {
        return alert('you can not save more than 100%');
    }

    const totalIncome = stringValueConverter('income');
    const foodExpense = stringValueConverter('food');
    const rentExpense = stringValueConverter('rent');
    const clothExpense = stringValueConverter('clothes');

    // কোন ফিল্ড এ কোন ভ্যালু না থাকলে বা সংখ্যা ছাড়া কথা লেখা থাকলে ওয়ার্নিং দিবে
    if (isNaN(totalIncome, foodExpense, rentExpense, clothExpense)) { return alert('Please enter valid numbers to all field'); }

    const balanceTotal = totalIncome - (foodExpense + rentExpense + clothExpense);
    const myBalance = document.getElementById('balance')
    myBalance.value = balanceTotal;

    const savingAmount = totalIncome * newpercentage;
    const mySavingAmount = document.getElementById('saving');

    // 5. যদি save amount তোমার balance এর চাইতে বেশি হয়ে যায়। তাহলে একটা alert দিয়ে বলবে-- তোমার balance এর চাইতে বেশি সেইভ করতে পারবে না।  
    if (savingAmount > balanceTotal) {
        alert('You can not save more than your balance');
        return;
    }
    mySavingAmount.value = savingAmount;

    const remainingBalance = document.getElementById('remaining');
    remainingBalance.value = balanceTotal - savingAmount;
})