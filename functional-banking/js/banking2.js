
function withdraw(){

     //withdraw input filed
    const withdrawInput = document.getElementById('withdraw-input');
     const withdrawInputValue = withdrawInput.value;
     withdrawInput.value = "";


     // Current Withdraw balance
     const withdrawBalance = document.getElementById('withdraw-total');
     const currentWithdrawBalance = withdrawBalance.innerText;

       // calculate withdraw balance and set balance
     const result = parseFloat(withdrawInputValue) +parseFloat( currentWithdrawBalance );
     withdrawBalance.innerText = result;

     // total current bank balance 
     const mainBalance = document.getElementById('balance-total');
     const balanceTotal = mainBalance.innerText;

     //check available balance and updated total bank balance
   if(balanceTotal > withdrawInputValue ){
    const result2 = parseFloat(balanceTotal) - parseFloat(withdrawInputValue) ;
    mainBalance.innerText = result2;
   } 
   else{
    alert('Insufficient Balance!');
   }


}