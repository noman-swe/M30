// input function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;

}
function getInnerTextValue(inputId) {
    const fieldTag = document.getElementById(inputId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

// update Total in box
function getUpdateAmount(inputId, amount) {
    const previousAmount = getInnerTextValue(inputId);
    const newTotal = previousAmount + amount;
    document.getElementById(inputId).innerText = newTotal;
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
    // let errorMsgBlock; 
    if (isNaN(updateAmount) != false) {
        const errorMsgShow = errorMsg.style.display = 'block';
        // console.log(errorMsgShow + "xxxx");
    }
    else if (isNaN(updateAmount) != true) {
        // not working
        const errorMsgBlock = errorMsg.style.display = 'none';
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
    const balance = getInnerTextValue('balance-total');
    // withdrawInputValue has to be greater than 0 && withdrawInputValue has to be less than equal to than total balance; withdraw can not be greater than balance
    if (withdrawInputValue > 0 && withdrawInputValue <= balance) {
        const withdrawUpdateAmount = getUpdateAmount('withdraw-total', withdrawInputValue);
        const updateBalanceTotal = getUpdateBalance(withdrawInputValue, false);
    } else {
        getErrorMsg('withdraw-error', withdrawInputValue);
    }
});

