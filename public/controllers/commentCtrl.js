//This is the controller for the comment page
'use strict'
app.controller("CommentCtrl", [
  '$scope',
  function($scope){

    $scope.saveComment = function(){

      console.log("Comment ", $scope.comment);

    }
    //get all the comments from the users db that have the id of the shop we are  on.  I think I need to pass id with a factory
    //display all the comments
    //allow user to add/update/delete their own comment...need to pass that info in as well

    $scope.comments = [
        {author: 'Hillary', body: 'Women should rule!', upvotes: 0},
        {author: 'Bill', body: 'What she said!', upvotes: 0},
        {author: 'me', body: 'FYI not May I', upvotes: 0}
    ];




      console.log("I have a comment");
  }


]);



