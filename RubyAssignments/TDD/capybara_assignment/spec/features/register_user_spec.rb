require 'rails_helper'
feature "guest user creates an account" do

  before(:each) do
    visit new_user_path
  end

  scenario "successfully creates a new user account" do
    fill_in "user_first_name", with: "Nick"
    fill_in "user_last_name", with: "deLannoy"
    fill_in "user_email", with: "nick.delannoy@gmail.com"
    click_button "Create User"
    expect(page).to have_content "Welcome, Nick"
    expect(page).to have_current_path(user_path(User.last))
  end

  scenario "unsuccessfully creates a new user account" do
    click_button "Create User"
    expect(current_path).to eq(new_user_path)
    expect(page).to have_content "User creation unsuccessful"
  end

  scenario "doesn't fill out first name field" do
    fill_in "user_last_name", with: "delannoy"
    fill_in "user_email", with: "nick.delannoy@gmail.com"
    click_button "Create User"
    expect(page).to have_content "First name can't be blank"
  end

  scenario "doesn't fill out last name field" do
    fill_in "user_first_name", with: "Nick"
    fill_in "user_email", with: "nick.delannoy@gmail.com"
    click_button "Create User"
    expect(page).to have_content "Last name can't be blank"
  end

  scenario "doesn't fill out email field" do
    fill_in "user_first_name", with: "Nick"
    fill_in "user_last_name", with: "delannoy"
    click_button "Create User"
    expect(page).to have_content "Email can't be blank"
  end




end
