require 'test_helper'

class SayControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get hello" do
    get :hello
    assert_response :success
  end

  test "should get hello_joe" do
    get :hello_joe
    assert_response :success
  end

  test "should get hello_name" do
    get :hello_name
    assert_response :success
  end

end
