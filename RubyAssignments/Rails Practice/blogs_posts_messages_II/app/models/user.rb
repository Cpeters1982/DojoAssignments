class User < ActiveRecord::Base
  has_many :messages
  has_many :owners
  has_many :blogs, through: :owners
  has_many :posts
  has_many :post_on_blogs, through: :posts, source: :blog
  has_many :comments, as: :commentable
  has_many :posted_comments, as: :comments

  validates :first_name, :last_name, :email, presence: true
end
