class Dojo < ActiveRecord::Base
  has_many :ninjas

  validates :name, :city, :state, presence: true
  validates :state, length: { is: 2 }

  before_save :upcase_state

  private
    def upcase_state
      self.state.upcase!
    end


end
