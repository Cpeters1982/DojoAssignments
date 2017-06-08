function personConstructor(name){

  var person = {
    name:name,
    distance_traveled:0,
    say_name:function(){
      console.log(this.name)
      return this
    },
    say_something:function(something){
      console.log(this.name + " says: " + something)
      return this
    },
    walk:function(){
      console.log(this.name + " is walking")
      distance_traveled += 3
      return this
    },
    run:function(){
      console.log(this.name + " is running")
      distance_traveled += 10
      return this
    },
    crawl:function(){
      console.log(this.name + " is crawling")
      distance_traveled += 1
      return this
    }

  }

  return person

}

function ninjaConstructor(name, cohort){

  var ninja = personConstructor(name)

  ninja.beltLevel = "Yellow"
  ninja.cohort = cohort

  ninja.levelUp = function (){
    if (this.beltLevel == "Yellow"){
      this.beltLevel = "Red"
    }
    else if(this.beltLevel == "Red"){
      this.beltLevel = "Black"
    }
  }
  return ninja

}

var newNinja = ninjaConstructor("Nick", "May '17")

console.log(newNinja)
newNinja.levelUp()
console.log(newNinja)
