// deposit
document.getElementById('btn-widthraw').addEventListener('click', function () {
    /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
    const newWithdrawAmount = getInputFieldValueById('widthraw-field');
    /* 
    1. get previous deposit total by id
    */
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    
    // calculate new deposit total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set deposit total value
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})