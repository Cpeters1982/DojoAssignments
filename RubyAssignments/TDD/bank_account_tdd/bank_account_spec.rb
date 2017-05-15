require_relative 'bank_account'

RSpec.describe BankAccount do

  before(:each) do
    @account1 = BankAccount.new
    @account2 = BankAccount.new(10, 20)
  end

  it 'has getter method for retrieving checking account balance' do
    expect(@account1.checking_balance).to eq(0)
    expect(@account2.checking_balance).to eq(10)
  end

  it 'has a getter method that retrieves total account balance' do
    expect(@account1.total_balance).to eq(0)
    expect(@account2.total_balance).to eq(30)
  end

  it 'has a function that allows the user to withdraw cash' do
    expect(@account2.withdraw :checking, 5).to eq(5)
    expect(@account2.withdraw :savings, 5).to eq(15)
  end

  it 'raises an error if a user tries to withdraw more money than they have in the account' do
    expect{@account1.withdraw :checking, 5}.to raise_error(InsufficientFundsError)
    expect{@account2.withdraw :savings, 30}.to raise_error(InsufficientFundsError)
  end

  it 'raises an error when the user attempts to retrieve the total number of bank accounts' do
    expect{BankAccount.number_of_accounts}.to raise_error(NoMethodError)
  end

  it 'raises an error when the user attempts to set the interest rate' do
    expect{@account1.interest_rate = 10}.to raise_error(NoMethodError)
  end


end
