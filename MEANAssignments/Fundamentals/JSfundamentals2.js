var sumBetweenXY = function (x, y) {
  var sum = 0;
  for (var curr = x; curr <= y; curr++){
    sum += curr
  }
  console.log(sum)
}

var arrayMin = function (arr) {
  var min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i]
    }
  }
  return min
}

var arrayAvg = function (arr) {
  var sum = arr[0];
  for(var i = 1; i < arr.length; i++){
    sum += arr[i]
  }
  return sum/arr.length
}

// sumBetweenXY(1,4)
// console.log(arrayMin([4,6,2,0,7]))
// console.log(arrayAvg([1,2,3,4,5]))

var person = {
  name:"Nick deLannoy",
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

console.log(person.name);
console.log(person.distance_traveled);
person.say_name();
person.say_something("I am cool");
