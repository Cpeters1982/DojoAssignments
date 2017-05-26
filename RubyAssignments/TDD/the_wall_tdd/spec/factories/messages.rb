FactoryGirl.define do
  factory :message do
    content "Test message"
    user
  end
end
