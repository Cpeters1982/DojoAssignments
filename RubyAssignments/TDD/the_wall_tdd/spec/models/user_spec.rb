require 'rails_helper'

RSpec.describe User, type: :model do


  it 'will not save unless username is present' do
    @user = build(:user, username: nil)
    expect(@user).to be_invalid

  end

  it 'will not save unless username is unique' do
    @user = build(:user)
    @user.save
    @user2 = build(:user)
    expect(@user2).to be_invalid

  end

  it 'will not save unless username is longer than 5 characters' do

    @user = build(:user, username: "Nick")
    expect(@user).to be_invalid

  end




end
