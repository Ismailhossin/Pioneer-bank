 // section-1
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener('click', function(){
     const loginArea1 = document.getElementById("login-area");
     loginArea1.style.display = "none";
 // section-2
 const tansactionArea = document.getElementById('tansaction-area');
 tansactionArea.style.display = 'block';
 });

 const depositButton = document.getElementById('addDeposit').addEventListener('click', function(){
    //  const depositAmo = document.getElementById('depositAmount').value;
    //  const depositNumber = parseFloat(depositAmo);
    const depositNumber = getInputNumber('depositAmount');

    //  const currentDepo = document.getElementById('currentDeposit').innerText;
    //  const currentDepositNumber = parseFloat(currentDepo);

    //  const totalDeposit = depositNumber + currentDepositNumber;
    //  document.getElementById('currentDeposit').innerText = totalDeposit;

     document.getElementById('depositAmount').value = "";
     //section-3
    updeteSpanText('currentDeposit', depositNumber)
    updeteSpanText('currentBalance', depositNumber);
     
 });
 function updeteSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);

    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
 }

 //section-4 withdraw button event handler
 const withdrawButton = document.getElementById('addWithdraw').addEventListener('click', function () {
    const withdrawNumber = getInputNumber('withdrawAmount');
    updeteSpanText('currentwithdraw', withdrawNumber);
    updeteSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
 });
 function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
 }