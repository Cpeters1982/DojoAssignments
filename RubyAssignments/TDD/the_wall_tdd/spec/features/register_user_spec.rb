require 'rails_helper'
feature "guest user creates an account" do

  before(:each) do
    visit new_user_path
  end

  scenario "successfully visits new user/login page" do
    expect(page).to have_current_path(new_user_path)
    expect(page).to have_content "Sign in"
    expect(page).to have_content "Register"
  end

  scenario "successfully creates a new user account" do
    register_user
    expect(page).to have_content "Welcome Nick"
    expect(page).to have_current_path(messages_path)
  end

  scenario "unsuccessfully creates a new user account" do
    click_button "Create User"
    expect(current_path).to eq(new_user_path)
    expect(page).to have_content "User creation unsuccessful"
  end

  scenario "doesn't fill out username field" do
    register_user(username: "")
    expect(page).to have_content "Username can't be blank"
  end

  scenario "doesn't fill out first name field" do
    register_user(first_name:"")
    expect(page).to have_content "First name can't be blank"
  end

  scenario "doesn't fill out last name field" do
    register_user(last_name:"")
    expect(page).to have_content "Last name can't be blank"
  end

  scenario "doesn't fill out password field" do
    register_user(password:"")
    expect(page).to have_content "Password can't be blank"
  end
  scenario "doesn't confirm password" do
    register_user(password_confirm:"")
    expect(page).to have_content "Password confirmation doesn't match"
  end




end
