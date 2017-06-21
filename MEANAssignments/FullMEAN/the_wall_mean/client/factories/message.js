module.exports = function(app){

  app.factory('messageFactory', function($http){

    var factory = {};

    factory.messages = [];

    factory.getMessages = function(success){

      $http.get('/messages').then(function(response){
        // console.log("RESPONSE FROM API IN GET MESSAGES:", response);
        if (response.data.errors){
          console.log(response.data.errors);
        } else {
          console.log("recieved messages in factory")
          factory.messages = response.data.messages
          if (typeof(success) == 'function'){
            success(factory.messages);
          } else {
            throw "ERROR: callback must be a function!"
          }
        }


      })

    }

    factory.createMessage = function(postData, success){

      $http.post('/messages', postData).then(function(response){
        // console.log(response);
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })

    }

    factory.createComment = function(messageID, postData, success){

      $http.post('/messages/' + messageID, postData).then(function(response){
        // console.log("Response:", response);
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })

    }

    factory.deleteMessage = function(messageID, success){
      $http.post('/messages/' + messageID + '/delete').then(function(response){
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })
    }

    factory.deleteComment = function(messageID, commentID, success){

      $http.post('/messages/' + messageID + '/comments/' + commentID + '/delete').then(function(response){
        if(response.data.result == 'failure'){
          console.log(response.data.message);
          console.log(response.data.errors);

        } else {
          console.log("Success!")
          console.log(response.data.message)
        }
        factory.getMessages(success)
      })



    }




    return factory;


  })




}
