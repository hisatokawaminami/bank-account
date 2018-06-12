var balance;

function BankAccount(name, initialDeposit){
  this.name = name;
  this.initialDeposit = initialDeposit;

}

function depositWithdraw(deposit, withdraw){
  this.deposit = deposit;
  this.withdraw = withdraw;
}

BankAccount.prototype.depositWithdraw = function (amount) {
 amount += this.deposit;
};

BankAccount.prototype.withdraw = function(){

}

$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedInitialDeposit = $("#initialDeposit").val();

    var newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
    balance = newBankAccount.initialDeposit
    console.log(newBankAccount.initialDeposit);
    $(".balance").text(balance);
  });

  $("#formTwo").submit(function(event){
    event.preventDefault();

    var inputtedDeposit = parseInt($("#deposit").val());
    var inputtedWithdraw = parseInt($("#withdraw").val());

    var sum = inputtedDeposit-inputtedWithdraw;

    BankAccount.prototype.depositWithdraw(sum);

    $(".balance").text(deposit);


  });

});
