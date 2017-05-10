require 'test_helper'

class TimesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get restart" do
    get :restart
    assert_response :success
  end

end
