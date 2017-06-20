module.exports = function(app){

  app.factory('userFactory', function($http){

    var factory = {};

    factory.users = [];
    factory.currentUser = null;

    factory.logoutUser = function(redirect){
      factory.currentUser = null;
      redirect({redirect:"login"})
    }

    factory.loginUser = function(postData, redirect, errorHandler){
      $http.post('/users/login', postData).then(function(response){

        if (response.data.result == 'failure'){
          console.log(response.data.message);
          errorHandler(response.data.errors);
          redirect({redirect:"login"})
        } else {
          console.log(response.data.user)
          factory.currentUser = response.data.user
          redirect({redirect:'success'})
        }

      })
    }


    factory.createUser = function(postData, redirect, errorHandler){

      $http.post('/users', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.errors);
          errorHandler(response.data.errors)
          redirect({redirect:'register'})
        } else {
          console.log("Success!")
          console.log(response.data.user)
          factory.currentUser = response.data.user
          redirect({redirect:'success'})
        }


      })

    }

    // factory.deleteUser = function(id, success){
    //
    //   $http.post('/users/' + id + '/delete').then(function(response){
    //     // console.log(response);
    //     if(response.data.result == 'failure'){
    //       console.log(response.data.errors);
    //
    //     } else {
    //       console.log("Success!")
    //       console.log(response.data.user)
    //     }
    //     factory.getUsers(success);
    //
    //   })
    // }
    //
    // factory.updateUser = function(id, postData, success){
    //
    //   $http.post('/users/' + id, postData).then(function(response){
    //     // console.log(response);
    //     if(response.data.result == 'failure'){
    //       console.log(response.data.errors);
    //
    //     } else {
    //       console.log("Success!")
    //       console.log(response.data.user)
    //     }
    //     factory.getUsers(success);
    //
    //   })
    //
    // }
    //
    // factory.getUsers = function(success){
    //
    //   $http.get('/users').then(function(response){
    //
    //     factory.users = response.data
    //     if (typeof(success) == 'function'){
    //       success(factory.users);
    //     } else {
    //       throw "ERROR: callback must be a function!"
    //     }
    //
    //   })
    //
    // }



    return factory;


  })

}
