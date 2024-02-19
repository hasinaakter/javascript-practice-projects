
// 1 get input value
function calculateMoney(giveId) {
    const depositInput = document.getElementById(giveId);
    const depositeValue = depositInput.value;
    const depositInputValue = parseFloat(depositeValue);
    // clear deposit input feild
    depositInput.value = '';
    return depositInputValue;
}

// 2 calculate deposite and widthdraw field
function updateDepWidthBalance(inputValance, previusCalculate) {
    const newTotal = document.getElementById(inputValance);
    const newAmount = newTotal.innerText;
    const newAmountTotal = parseFloat(newAmount) + previusCalculate;
    newTotal.innerText = newAmountTotal;
    return newAmountTotal;
}

// 3 get deposite and withdraw value
function calculateBalance(giveId, prevBalance) {
    const showBalance = document.getElementById(giveId);
    const showValue = showBalance.innerText;
    const showInputValue = parseFloat(showValue);

    // show balance
    const newBalanceTotal = showInputValue + prevBalance;
    showBalance.innerText = newBalanceTotal;
    return newBalanceTotal;

}


// add handler in deposit button
    document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the deposited amount
    const previusCalculate = calculateMoney('deposit-input');
    // updated deposited field balance value
    updateDepWidthBalance('deposit-total', previusCalculate);
    calculateBalance('balance-total', previusCalculate);
});



//handler in withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get withdraw amount
    const withdrawInput = calculateMoney('withdraw-input');
    //calculate withdraw filed balance value
     updateDepWidthBalance('withdraw-total', withdrawInput);

    // get total balance
    const totalbalancetInput = document.getElementById('balance-total');
    const totalbalance= totalbalancetInput.innerText;
  
    // updated balance after withdraw money
   if(withdrawInput < totalbalance){
    const withdrawMoney = -withdrawInput;
    calculateBalance('balance-total', withdrawMoney);
   }
   else{
    alert('Insuficient Balance');
   }
});