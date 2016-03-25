//This is the controller for the comment page
'use strict'
app.controller("CommentCtrl", [
  '$scope','$http', '$location', '$routeParams', 'basketWorks',
  function($scope, $http, $location, $routeParams, basketWorks){

    //lodash
    _ = window._;

    const shop = basketWorks.getShop();
    const user = basketWorks.getUser();

    console.log("shop from factory ", shop);
    console.log("user from factory ", user);

    $scope.shop = shop;
    $scope.user = user;

    //need to to ng-show for when there are no comments
    console.log("LENGTH?? ", shop.comments.length);

    if (shop.comments.length > 0)
      $scope.otherComments = true;
    if (shop.comments.length === 0)
      $scope.otherComments = false;


    //a match means the logged in user has left a comment
    const match = _.find(shop.comments, {'userId': user._id});
      if(match) {
        $scope.userComment = true;
        console.log("match? ", match);
        //set up _id so you can find this comment if the user updates it
        $scope.current_id = match._id;
        $scope.currentUserComment = match.text;
        const remainingComments = _.filter(shop.comments, (comment) => {
          return comment.userId !== user._id
        });
        console.log("remaining ", remainingComments);
        if  (remainingComments.length === 0) {
          $scope.otherComments = false;
        } else {
          $scope.comments = remainingComments;
          }
      }
      //no match means the logged in user has not left a comment
      if(!match) {
        $scope.userComment = false;
        console.log("no match");
        $scope.comments = shop.comments;
      };

    $scope.saveComment = function(){
      console.log("I'm adding a comment ", $scope.currentUserComment);
      $http.post('/comment/'+ shop._id, {
                                        userId: user._id,
                                        author: user.firstName,
                                        text: $scope.currentUserComment})
                                        .then((response) => {
                                        console.log("added a comment");
                                        //has the logged in user
                                        console.log("user ", response.user);
                                        console.log("shop ", response.shops);
                                        }, function(err) {
                                          console.log('ERRRor while saving comment!')
                                        });
      $scope.userComment = true;
     }

    $scope.updateComment = function(updatedComment){
      console.log("I'm updating ", $scope.currentUserComment);
        // console.log("coment user _id ", $scope.current_id);
      console.log("ng model? ", updatedComment);
/////////Need to get updated data and not sure how!!!!!
/////// ///////////////////////////////
      $http.put('/comment/'+ $scope.current_id, {
                                  text: "new message"})
                                  .then((response) => {
                                  console.log("UPDATED a comment");
                                  }, function(err) {
                                    console.log('ERRRor while updating comment!')
                                  });
        $scope.userComment = true;
    }


    $scope.deleteComment = function(){
      console.log("delete userId ", user._id);
      console.log("I'm deleting ", $scope.currentUserComment);
      $http.delete('/comment/'+ shop._id + '/' + user._id)
                                        .then((response) => {
                                        console.log("deleted a comment");
                                        console.log("response.data.shops");
                                        }, function(err) {
                                          console.log('ERRRor while deleting comment!')
                                        });
      $scope.currentUserComment='';
      $scope.userComment = false;
    }



    $scope.cancelComment = function(){
      console.log("I'm canceling-where should I go? ");
    }

    $scope.logout = function(){
    $http
      .delete('/login')
      .then((response) => {
        console.log("have I logged out?");
        $location.path('/login');
      }, function(err) {
        console.log('ERRR!')
        $scope.errMessage = true;
        $location.path('/login')
      })
    }


}]);


//56f16fe265bfd8e723a08a37
