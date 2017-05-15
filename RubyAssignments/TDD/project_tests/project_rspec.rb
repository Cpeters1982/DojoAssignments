require_relative 'project' # include our Project class in our spec file
RSpec.describe Project do
  before(:each) do
    @project1 = Project.new('Project 1', 'description 1', 'Nick') # create a new project and make sure we can set the name attribute
    @project2 = Project.new('Project 2', 'description 2', 'Nick')
  end
  it 'has a getter and setter for name attribute' do
    @project1.name = "Changed Name" # this line would fail if our class did not have a setter method
    expect(@project1.name).to eq("Changed Name") # this line would fail if we did not have a getter or if it did not change the name successfully in the previous line.
  end

  it 'has a getter and setter for owner attribute' do
    @project1.owner = "Changed Owner"
    expect(@project1.owner).to eq("Changed Owner")
  end

  it 'has a method elevator_pitch to explain name and description' do
    expect(@project1.elevator_pitch).to eq("Project 1, description 1")
    expect(@project2.elevator_pitch).to eq("Project 2, description 2")
  end

  it 'has method tasks and add_tasks to add and get tasks' do
    expect(@project1.tasks).to eq([])
    @project1.add_tasks("Added Task")
    expect(@project1.tasks).to eq(["Added Task"])
  end

end
