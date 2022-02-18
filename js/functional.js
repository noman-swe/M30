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
}


document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputValue = getInputValue('deposit-input');
    const updateAmount = getUpdateAmount('deposit-total', depositInputValue);
});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputValue = getInputValue('withdraw-input');
    // console.log(withdrawInputValue);
});

