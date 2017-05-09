class Message < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  has_many :comments, as: :commentable

  delegate :blog, to: :post

  validates :author, :message, presence: true
end
