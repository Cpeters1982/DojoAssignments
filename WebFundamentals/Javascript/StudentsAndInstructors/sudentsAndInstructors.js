var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function partOne(arrOfObjects){
    for (var x = 0; x < arr.length; x++){
        console.log(arrOfObjects[x].first_name + " " + arrOfObjects[x].last_name)
    }
}

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }




function partTwo(ObjOfArrOfObj){
    for(var key in ObjOfArrOfObj){
        console.log(key);
        // console.log(ObjOfArrOfObj[key]);
        for (var x = 0; x < ObjOfArrOfObj[key].length; x++){
            // console.log("current Index: " + x)
            var firstName = ObjOfArrOfObj[key][x].first_name;
            // console.log(firstName);
            var lastName = ObjOfArrOfObj[key][x].last_name;
            // console.log(lastName);
            console.log((x+1) + " - " + firstName + " " + lastName + " - " + (firstName.length + lastName.length));
        }
    }
}

partTwo(users);