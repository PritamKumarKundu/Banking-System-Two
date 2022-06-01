function getInputValue(inputId)
{
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmount =inputField.value;
    inputField.value = "";
    return inputAmount;
}

function updateTotalField(totalFieldId, amount)
{
    // debugger;
    const totalField = document.getElementById(totalFieldId);
    const totalAmount = totalField.innerText;
    totalField.innerText = parseFloat(totalAmount) + parseFloat(amount);
}

function getCurrentBalance()
{
    // debugger;
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = balanceTotal.innerText;
    return balanceTotalAmount;
}

function updateBalance(balanceId, amountTwo)
{
    // debugger;
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = getCurrentBalance();
    if(amountTwo == true)
    {
        balanceTotal.innerText = parseFloat(balanceTotalAmount) + parseFloat(balanceId);
    }
    else
    {
        balanceTotal.innerText = parseFloat(balanceTotalAmount) - parseFloat(balanceId);
    }
}

document.getElementById("deposit-button").addEventListener("click", function()
{
    const depositAmount = getInputValue("deposit-input");
    if(depositAmount > 0)
    {
        updateTotalField("deposit-total", depositAmount);
        updateBalance(depositAmount, true);
    }
});

document.getElementById("withdraw-button").addEventListener("click", function()
{
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance)
    {
        updateTotalField("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance)
    {
        console.log("This Amount is not Available!!!");
    }
});