
EMAIL_REGEX = /\A(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})\z/i

class User < ActiveRecord::Base
    validates :first_name, :last_name, :presence => true
    validates :email, :uniqueness => true, format: { with: EMAIL_REGEX, message: "Please enter a valid email" }
end
