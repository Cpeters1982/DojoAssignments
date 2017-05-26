require 'rails_helper'

RSpec.describe Message, type: :model do

  it 'will not save unless content field is present' do

    @message = build(:message, content: nil)
    expect(@message).to be_invalid

  end

  it 'will not save unless content is longer than ten characters' do
    @user = build(:user)

    @message = build(:message, content: "Sup", user: @user)
    expect(@message).to be_invalid

    @message2 = build(:message, content: "This is a longer message", user: @user)
    expect(@message2).to be_valid
  end

  it 'will not save unless user is present' do
    @user = build(:user)

    @message = build(:message, user: nil)
    expect(@message).to be_invalid

    @message2 = build(:message, user: @user)
    expect(@message2).to be_valid

  end


end
