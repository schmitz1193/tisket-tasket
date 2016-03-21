//This is the controller for the comment page
'use strict'
app.controller("CommentCtrl", [
  '$scope','$http', '$location', '$routeParams', 'basketWorks',
  function($scope, $http, $location, $routeParams, basketWorks){
    //get all the comments from the users db that have the id of the shop we are  on.  I think I need to pass id with a factory
    //display all the comments
    //allow user to add/update/delete their own comment...need to pass that info in as well

    $scope.shop = basketWorks.getShop();
    $scope.userId = basketWorks.getUser();
    console.log("shop from factory ", $scope.shop);
    console.log("user from factory ", $scope.userId);
    $scope.comments = $scope

   $scope.comments = [
        {author: 'Hillary', body: 'Women should rule!', upvotes: 0},
        {author: 'Bill', body: 'What she said!', upvotes: 0},
        {author: 'me', body: 'FYI not May I', upvotes: 0}
    ];

    $scope.saveComment = function(){
      //this will have code to $http all save/delete/update logged in users comment
      console.log("Comment ", $scope.comment);

    }

}]);



