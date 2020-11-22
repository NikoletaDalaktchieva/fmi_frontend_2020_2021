class PaymentMethod {
	getAmount() {
		return "Your amount in the account is: ";
	}
}

class CashMethod extends PaymentMethod{
	
	constructor(){
		super();
		let amount_ = 0;
		let this_ = this;
		
		this.amount = function() {
			return amount_;
		}
		this.addToAmount = function(number) {
			amount_ += number;
			return this_;
		}
		this.reduceFromAmount = function(number) {
			amount_ -= number;
			return this_;
		}
	}
	
	getAmount() {
		return super.getAmount() + this.amount();
	}
}

class CreditMethod extends PaymentMethod{
	
		constructor(){
		super();
		let amount_ = 0;
		let this_ = this;
		
		this.amount = function() {
			return amount_;
		}
		this.addToAmount = function(number) {
			amount_ += (90*number)/100;;
			return this_;
		}
		this.reduceFromAmount = function(number) {
			amount_ -= number;
			return this_;
		}
	}
	
	getAmount() {
		return super.getAmount() + this.amount();
	}
}


function test(){
	const cashAccount = new CashMethod();
		console.log(cashAccount.getAmount()); // returns “Your amount in the account is: 0”
		console.log(cashAccount.addToAmount(100)); // returns cashAccount instance (useful for method chaining)
		console.log(cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10)); // returns cashAccount instance (useful for method chaining)
		console.log(cashAccount.getAmount()); // returns “Your amount in the account is: 140”

		const creditAccount = new CreditMethod();
		console.log(creditAccount.addToAmount(100)); // returns creditAccount instance (useful for method chaining)
		console.log(creditAccount.getAmount()); // returns “Your amount in the account is: 90”;	
}

test();