require 'rails_helper'
module CapybaraHelpers

  def register_user(username: "NickD", first_name:"Nick", last_name:"deLannoy", password:"password", password_confirm:"password")
    visit new_user_path unless current_path == new_user_path
    fill_in "user_username", with: username
    fill_in "user_first_name", with: first_name
    fill_in "user_last_name", with: last_name
    fill_in "user_password", with: password
    fill_in "user_password_confirmation", with: password_confirm
    click_button "Create User"
  end

  def login_user(username:"NickD", password:"password")
    visit new_user_path unless current_path == new_user_path
    fill_in "login_username", with: username
    fill_in "login_password", with: password
    click_button "Login"
  end

end
