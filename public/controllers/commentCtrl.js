//This is the controller for the comment page
'use strict'
app.controller("CommentCtrl", [
  '$scope','$http', '$location', '$routeParams', 'basketWorks',
  function($scope, $http, $location, $routeParams, basketWorks){

    //lodash
    _ = window._;

    const shop = basketWorks.getShop();
    const user = basketWorks.getUser();
    // const name = basketWorks.getAuthor();

    console.log("shop from factory ", shop);
    console.log("user from factory ", user);

    $scope.shop = shop;
    // $scope.name = name;
    $scope.user = user;

    //need to to ng-show for when there are no comments

    if (shop.commentCount > 0)
      $scope.otherComments = true;
    if (shop.commentCount = 0)
      $scope.otherComments = false;

    const match = _.find(shop.comments, {'userId': user._id});
      if(match) {
        $scope.userComment = true;
        console.log("match? ", match);
        $scope.currentUserComment = match.text;
///////////  NEED TO DO THIS
//user has a comment so if commentcount is 1 then the switch to show other comments needs to be turned off
///////////////////////////////////////////////////////////////////////////////////////////////////////////
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
      //this is where I am losing it!
      if(!match) {
        $scope.userComment = false;
        console.log("no match? ", match);
        $scope.comments = shop.comments;
      };

    $scope.saveComment = function(){
      console.log("I'm adding a comment ", $scope.currentUserComment);
      shop.commentCount += 1;
      $http.post('/comment/'+ shop._id, {commentCount: shop.commentCount,
                                        userId: user._id,
                                        author: name,
                                        text: $scope.currentUserComment})
                                        .success((response) => {
                                        console.log("added a comment");
                                        //has the logged in user
                                        console.log("user ", response.user);
                                        console.log("shop ", response.shop);
                                        });
      $scope.userComment = true;

 //Need to add this code:?????????works???????
//if user leaves a comment and submits it, got to db to update comment count and add their comment, then redisplay comment with edit  & delete button
     }

    $scope.updateComment = function(){
      console.log("I'm updating ", $scope.currentUserComment);
    }


    $scope.deleteComment = function(){
      console.log("delete userId ", user._id);
      console.log("I'm deleting ", $scope.currentUserComment);
      console.log("fjirst commentCount ", $scope.shop.commentCount);

      // const Count = $scope.shop.comment - 1;
      const Count = 8;

      $http.delete('/comment/'+ shop._id + '/' + user._id + '/' + Count)
                                        .success((response) => {
                                        console.log("deleted a comment");
                                        });
    }



    $scope.cancelComment = function(){
      console.log("I'm canceling-where should I go? ");
    }

    $scope.logout = function(){
    console.log("I'm logging out ");
    $http
      .delete('/login')
      .success((response) => {
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
