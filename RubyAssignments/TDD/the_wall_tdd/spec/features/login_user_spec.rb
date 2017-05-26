require 'rails_helper'

feature 'user signs in to account' do

  before(:each) do
    visit new_user_path
    @user = build(:user)
    @user.save

  end

  scenario "successfully logs in" do
    login_user
    expect(page).to have_content "Welcome Nick"
    expect(page).to have_current_path(messages_path)
  end

  scenario "enters wrong password" do
    login_user(password:"pass")
    expect(page).to have_current_path(new_user_path)
    expect(page).to have_content "Unable to login"
  end

  scenario "enters invalid username" do
    login_user(username:"JoeBob")
    expect(page).to have_current_path(new_user_path)
    expect(page).to have_content "Unable to login"
  end



end
