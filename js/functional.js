// input function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
    
}

// update Total in box
function getUpdateAmount(inputId, amount){
    const totalTag = document.getElementById(inputId);
    const previousAmountTxt = totalTag.innerText;
    const previousAmount = parseFloat(previousAmountTxt);
    const newTotal = previousAmount + amount;
    totalTag.innerText = newTotal;
    return newTotal;
    // console.log('newTotal: ' + newTotal);
}

// update balance
function getUpdateBalance(amount, isAdding){
    const balanceTag = document.getElementById('balance-total');
    console.log(balanceTag);
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalanceTotal;
    if(isAdding == true){
        newBalanceTotal = previousBalance + amount;
    }else{
        newBalanceTotal = previousBalance - amount;
    }
    balanceTag.innerText = newBalanceTotal;
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputValue = getInputValue('deposit-input');
    const depositUpdateAmount = getUpdateAmount('deposit-total', depositInputValue);
    const updateBalanceTotal = getUpdateBalance(depositInputValue, true);
});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputValue = getInputValue('withdraw-input');
    const withdrawUpdateAmount = getUpdateAmount('withdraw-total', withdrawInputValue);
    const updateBalanceTotal = getUpdateBalance(withdrawInputValue, false);
    // console.log(withdrawInputValue);
});

