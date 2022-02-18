// input function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;

}

// update Total in box
function getUpdateAmount(inputId, amount) {
    const totalTag = document.getElementById(inputId);
    const previousAmountTxt = totalTag.innerText;
    const previousAmount = parseFloat(previousAmountTxt);
    const newTotal = previousAmount + amount;
    totalTag.innerText = newTotal;
    return newTotal;
    // console.log('newTotal: ' + newTotal);
}

// update balance
function getUpdateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalanceTotal;
    if (isAdding == true) {
        newBalanceTotal = previousBalance + amount;
    } else {
        newBalanceTotal = previousBalance - amount;
    }
    balanceTag.innerText = newBalanceTotal;
}

// error msg
function getErrorMsg(errorId, updateAmount) {
    const errorMsg = document.getElementById(errorId);
    errorMsg.style.color = 'red';
    if(isNaN(updateAmount) != false ){
        const errorMsgShow = errorMsg.style.display = 'block';
        console.log(errorMsgShow + "xxxx");
    }
    else if( isNaN(updateAmount) != true){
        // not working
        console.log(updateAmount);
        const errorMsgBlock = errorMsg.style.display = 'none'; 
        console.log( 'aaaa');
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInputValue = getInputValue('deposit-input');
    if (depositInputValue > 0) {
        const depositUpdateAmount = getUpdateAmount('deposit-total', depositInputValue);
        const updateBalanceTotal = getUpdateBalance(depositInputValue, true);
    } else {
        getErrorMsg('deposit-error', depositInputValue);
        
    }
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputValue = getInputValue('withdraw-input');
    if (withdrawInputValue > 0) {
        const withdrawUpdateAmount = getUpdateAmount('withdraw-total', withdrawInputValue);
        const updateBalanceTotal = getUpdateBalance(withdrawInputValue, false);
    } else {
        getErrorMsg('withdraw-error', withdrawInputValue);
    }
});

