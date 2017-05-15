class Project

  attr_accessor :name, :description
  def initialize
    @name = ""
    @description = ""
  end
  def elevator_pitch
    "#{@name}, #{@description}"
  end
end
