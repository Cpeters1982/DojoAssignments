class BankAccount
  @@number_of_accounts=0

  def initialize checking_initial=0, savings_initial=0
    @account_number = generate_account_number
    @checking_balance = checking_initial
    @savings_balance = savings_initial
    @interest_rate = 0.01
    @@number_of_accounts += 1
  end

  def checking_balance
    puts "Checking Account Balance: #{@checking_balance}"
  end

  def savings_balance
    puts "Savings Account Balance: #{@savings_balance}"
  end

  def total_balance
    puts "Total money: #{@savings_balance + @checking_balance}"
  end

  def deposit_to_checking amount
    @checking_balance += amount
  end

  def deposit_to_savings amount
    @savings_balance += amount
  end

  def withdraw account, amount
    if account == :checking
      unless @checking_balance - amount < 0
        @checking_balance -= amount
      else
        puts "ERROR: Insufficient funds"
      end
    elsif account == :savings
      unless @savings_balance - amount < 0
        @savings_balance -= amount
      else
        puts "ERROR: Insufficient funds"
      end
    else
      puts "ERROR: please specify either :checking or :savings"
    end
  end
  def account_information
    puts "Account Number: #{@account_number}"
    self.total_balance
    self.checking_balance
    self.savings_balance
    puts "Interest Rate: #{@interest_rate}"
  end

  private
    def generate_account_number
      return (0..9).to_a.sample(10).join
    end
  # end
end
new_account = BankAccount.new
new_account.account_information
new_account.deposit_to_savings 100
new_account.deposit_to_checking 200
new_account.withdraw :checking, 50
new_account.account_information
