// input function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
    
}

// update Total in box
function getUpdateAmount(inputId, amount){
    const totalTag = document.getElementById(inputId);
    const previousAmountTxt = totalTag.innerText;
    const previousAmount = parseFloat(previousAmountTxt);
    const newTotal = previousAmount + amount;
    totalTag.innerText = newTotal;
    
    // const inputFieldValue = getInputValue(inputId);
}


document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputValue = getInputValue('deposit-input');
    const Value = getUpdateAmount('deposit-total');
    // console.log(depositInputValue);
    console.log(Value);
});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputValue = getInputValue('withdraw-input');
    // console.log(withdrawInputValue);
});

