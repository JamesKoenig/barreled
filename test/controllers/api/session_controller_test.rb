require 'test_helper'

class Api::SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get api/sessions" do
    get api_session_api/sessions_url
    assert_response :success
  end

end
