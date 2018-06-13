// business logic
function BankAccount(name, amount){
  this.name = name;
  this.currentBalance = amount;
}

// function DepositWithdraw(deposit, withdraw){
//   this.deposit = deposit;
//   this.withdraw = withdraw;
// }

BankAccount.prototype.deposit = function(amount){
this.currentBalance = this.currentBalance + amount;
};

BankAccount.prototype.withdraw = function(amount){
  this.currentBalance = this.currentBalance - amount;

}


// user interface
$(function(){
    $("#formOne").submit(function(event){
      event.preventDefault();

      var name = $("input#name").val();
      var balanceTemp = parseInt($("input#initialDeposit").val());

      var newBankAccount = new BankAccount(name, balanceTemp);
    $(".balance").text(newBankAccount.currentBalance)

    $("#balance").click(function(){
      var deposit = parseInt($("input#deposit").val());
      var withdraw = parseInt($("input#withdraw").val());

      newBankAccount.deposit(deposit);
      newBankAccount.withdraw(withdraw);

      $(".balance").text(newBankAccount.currentBalance);

    });
  });
    });
