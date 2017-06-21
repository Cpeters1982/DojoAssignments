module.exports = function(app){
  app.controller('wallController', ['$scope', 'messageFactory', 'userFactory', '$location', function($scope, messageFactory, userFactory, $location){

    $scope.messages = [];

    var redirect = function(dest){
      if (dest.redirect == "login"){
        $location.url('/login');
      } else {
        $location.url('/home');
      }
    }

    if(!userFactory.currentUser){
      redirect({redirect:'login'});
    } else {
      $scope.currentUser = userFactory.currentUser
    }



    var setMessages = function(data){
      // console.log("DATA FROM SET MESSAGES:", data)
      $scope.messages = data;
      $scope.newMessage = {};
    }

    messageFactory.getMessages(setMessages);


    $scope.logout = function(){
      userFactory.logoutUser(redirect);
    };


    $scope.addMessage = function(userID){
      $scope.newMessage.user_id = userID
      console.log($scope.newMessage)
      messageFactory.createMessage($scope.newMessage, setMessages);
    }

    $scope.addComment = function(userID, messageID, comment){
      // console.log("COMMENT", comment);
      // console.log("USING WATCHIFY!!!")
      comment.user_id = userID
      messageFactory.createComment(messageID, comment, setMessages);
    }

    $scope.deleteMessage = function(messageID){
      console.log("Called deleteMessage in controller on message ID: ", messageID)
      messageFactory.deleteMessage(messageID, setMessages);
    }

    $scope.deleteComment = function(messageID, commentID){
      console.log("Called deleteComment in controller on commentID: ", commentID, "... Within message ID: ", messageID);
      messageFactory.deleteComment(messageID, commentID, setMessages);
    }

  }])
}
