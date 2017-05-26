require 'rails_helper'

feature 'user logs out' do

  before(:each) do
    @user = build(:user)
    @user.save
    visit new_user_path
    fill_in "login_username", with: "NickD"
    fill_in "login_password", with: "password"
    click_button "Login"
    expect(page).to have_content "Welcome Nick"
    expect(page).to have_current_path(messages_path)
  end

  scenario 'messages page has log out button' do

    expect(page).to have_content "Logout"

  end

  scenario 'user successfully logs out' do

    click_link "Logout"

    expect(page).to have_current_path(new_user_path)

  end




end
