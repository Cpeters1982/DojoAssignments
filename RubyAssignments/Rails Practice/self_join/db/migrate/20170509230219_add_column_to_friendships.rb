class AddColumnToFriendships < ActiveRecord::Migration
  def change
    add_reference :friendships, :friend, index: true, foreign_key: true
  end
end
