//click hobe jekhane addEventListener sekhane

document.getElementById('btn-deposit').addEventListener('click', function(){
  const depositField= document.getElementById('deposit-field');
  const newDepositAmountString= depositField.value;
  const newDepositAmount= parseFloat(newDepositAmountString);

  //inputbox click button er clock er por khali hoye jabe
  depositField.value='';
  
 
  const depositTotalElement= document.getElementById('deposit-total');
  const previousDepositTotalString= depositTotalElement.innerText;
  const previousDepositTotal= parseFloat(previousDepositTotalString);

   const newDepositTotal= previousDepositTotal + newDepositAmount;
   depositTotalElement.innerText= newDepositTotal;

   //Balance box er kaj
   const balanceTotalElement= document.getElementById('balance-total');
   const previousBalanceTotalString= balanceTotalElement.innerText;
   const previousBalanceTotalAmount= parseFloat(previousBalanceTotalString);

   const newBalanceTotal= previousBalanceTotalAmount + newDepositAmount;
   balanceTotalElement.innerText= newBalanceTotal;
})