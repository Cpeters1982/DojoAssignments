require_relative 'apple_tree'

RSpec.describe AppleTree do

  before(:each) do
    @tree = AppleTree.new
  end

  it 'has age attribute with getter and setter methods' do
    @tree.age = 10
    expect(@tree.age).to eq(10)
  end

  it 'has height attribute with getter method and no setter method' do
    expect{@tree.height=50}.to raise_error(NoMethodError)
    expect(@tree.height).to eq(20)
  end

  it 'has apple_count attribute getter method and no setter method' do
    expect{@tree.apple_count=50}.to raise_error(NoMethodError)
    expect(@tree.apple_count).to eq(0)
  end

  it 'has method year_gone_by that adds one year to age attribute, increases height attribute by 10%, and raises apple_count attribute by 2. Apple tree should not grow apples for first three years, and should not grow apples if it is older than 10' do
    @tree.year_gone_by
    expect(@tree.age).to eq(1)
    expect(@tree.height).to eq(22)
    expect(@tree.apple_count).to eq(0)

    @tree.year_gone_by.year_gone_by.year_gone_by
    expect(@tree.age).to eq(4) # tree is now 4 years old
    expect(@tree.apple_count).to eq(2)

    @tree.year_gone_by.year_gone_by.year_gone_by.year_gone_by.year_gone_by.year_gone_by.year_gone_by
    expect(@tree.age).to eq(11) # tree is now 11 years old
    expect(@tree.apple_count).to eq(14)
  end

  it 'has method pick_apples that removes all apples from the tree' do

    @tree.year_gone_by.year_gone_by.year_gone_by.year_gone_by
    expect(@tree.age).to eq(4) # tree is now 4 years old
    expect(@tree.apple_count).to eq(2)
    @tree.pick_apples
    expect(@tree.apple_count).to eq(0)

  end

end
