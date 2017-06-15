module.exports = function(app){
  app.controller('MessagesController', ['$scope', 'messageFactory', function($scope, messageFactory){

    $scope.messages = [];

    var setMessages = function(data){
      // console.log("DATA FROM SET MESSAGES:", data)
      $scope.messages = data;
      $scope.newMessage = {};
    }

    messageFactory.getMessages(setMessages);


    $scope.addMessage = function(){
      messageFactory.createMessage($scope.newMessage, setMessages);
    }

    $scope.addComment = function(messageID, comment){
      // console.log("COMMENT", comment);
      // console.log("USING WATCHIFY!!!")
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
