function VehicleConstructor (name, numWheels, numPassengers, speed){


  this.distance_traveled = 0
  this.name = name
  this.numWheels = numWheels
  this.numPassengers = numPassengers
  this.speed = speed

  this.vin = Math.floor((Math.random() * 89999999) + 10000000);

  // this.makeNoise = function(){
  //   console.log("Making some noise")
  // }

  // this.move = function(){
  //   updateDistanceTravelled()
  //   self.makeNoise()
  // }
  // this.checkMiles = function(){
  //   console.log(distance_traveled)
  // }

  // this.updateDistanceTravelled(){
  //   distance_traveled += self.speed
  // }

}

VehicleConstructor.prototype.makeNoise = function(){
  console.log("Making some noise")
}

VehicleConstructor.prototype.updateDistanceTravelled = function(){
  this.distance_traveled += this.speed
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_traveled)
}

VehicleConstructor.prototype.move = function(){
  this.updateDistanceTravelled()
  this.makeNoise()
}

VehicleConstructor.prototype.getVin = function(){
  return this.vin
}

var bike = new VehicleConstructor('Bike', 2, 1, 5)
bike.makeNoise = function(){console.log("ring ring!")}

var sedan = new VehicleConstructor('Sedan', 4, 5, 50)
sedan.makeNoise = function(){console.log("Honk Honk!")}

var bus = new VehicleConstructor('Bus', 4, 60, 30)
bus.addPassengers = function(numToAdd){
  self.numPassengers += numToAdd
}

bus.move()
bus.checkMiles()
bus.move()
bus.checkMiles()
console.log(bus.getVin());
