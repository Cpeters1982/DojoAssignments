class User < ActiveRecord::Base
  validates :username, :first_name, :last_name, :password, :presence => true
  validates :password, confirmation: true
  validates :username, :uniqueness => true, :length => {minimum: 5}
end
