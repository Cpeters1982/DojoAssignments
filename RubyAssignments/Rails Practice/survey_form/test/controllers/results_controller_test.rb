require 'test_helper'

class ResultsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get show_result" do
    get :show_result
    assert_response :success
  end

end
