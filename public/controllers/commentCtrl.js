//This is the controller for the comment page
'use strict'
app.controller("CommentCtrl", [
  '$scope','$http', '$location', '$routeParams', 'basketWorks',
  function($scope, $http, $location, $routeParams, basketWorks){

    //lodash
    _ = window._;

    //get all the comments from the users db that have the id of the shop we are  on.  I think I need to pass id with a factory
    //display all the comments
    //allow user to add/update/delete their own comment...need to pass that info in as well
    // $scope.userComment = false;
    // $scope.userComment = true;
    // $scope.otherComments = true;
    // $scope.otherComments = false;
    const shop = basketWorks.getShop();
    const userId = basketWorks.getUser();
    const name = basketWorks.getAuthor();
    console.log("shop from factory ", shop);
    console.log("user from factory ", userId);

    $scope.comments = shop.comments;

    //need to to ng-show for when there are no comments

    shop.commentCount = 2;
    if (shop.commentCount > 0)
      $scope.otherComments = true;
    if (shop.commentCount = 0)
      $scope.otherComments = false;

   $scope.comments = [
        {userId: '123', author: 'Hillary', text: 'Women should rule!'},
        {userId: '456', author: 'Bill', text: 'What she said!'},
        {userId: '789', author: 'me', text: 'FYI not May I'}
    ];



    // const match = _.find(shop.comments, 'userId', userId);
    const match = _.find($scope.comments, {'userId': userId});
      if(match) {
        $scope.userComment = true;
        console.log("match? ", match);
        $scope.currentUserComment = match.text;
      }
      if(!match) {
        $scope.userComment = false;
        console.log("no match? ", match);
      };

// check if logged in user has a comment, if yes, display comment with edit and delete button.
// if user does not have a comment, display text area so they can leave a comment if they wish.
//if user leaves a comment and submits it, got to db to update comment count and add their comment, then redisplay comment with edit  & delete button

   // $scope.currentUserComment = "I just want a job";


    $scope.saveComment = function(){
      console.log("I'm adding a comment ", $scope.currentUserComment);
      shop.commentCount += 1;
    //   $http.put('/comment/'+ shop._id, {commentCount: shop.commentCount,
    //                                     userId: userId,
    //                                     author: Name,
    //                                     text: shop.currentUserComment})
    //                                     .success((response) => {
    //                                     console.log("added a comment");
    //                                     });
     }

    $scope.updateComment = function(){
      console.log("I'm updating ", $scope.currentUserComment);
    }
    $scope.deleteComment = function(){
      console.log("I'm deleting ", $scope.currentUserComment);
    }
    $scope.cancelComment = function(){
      console.log("I'm canceling-where should I go? ");
    }

}]);



