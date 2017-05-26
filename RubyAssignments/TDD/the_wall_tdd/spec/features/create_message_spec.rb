require 'rails_helper'

feature 'user creates message' do

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

  scenario 'successfully logs in' do
    expect(page).to have_content "Welcome Nick"
    expect(page).to have_current_path(messages_path)
    expect(page).to have_content "Post a Message"
  end

  scenario 'successfully posts message' do

    fill_in "message_content", with: "This is a new message"
    click_button "Post a Message"

    expect(page).to have_current_path(messages_path)
    expect(page).to have_content "This is a new message"

  end

  scenario 'leaves content blank' do

    click_button "Post a Message"

    expect(page).to have_current_path(messages_path)
    expect(page).to have_content "Failed to post new message"
    expect(page).to have_content "Content can't be blank"


  end

  scenario 'enters content shorter than ten characters' do
    fill_in "message_content", with: "Hello"
    click_button "Post a Message"
    expect(page).to have_current_path(messages_path)
    expect(page).to have_content "Failed to post new message"
    expect(page).to have_content "Content is too short"


  end







end
