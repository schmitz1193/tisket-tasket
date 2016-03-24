//This is the controller for the shop page
'use strict'
app.controller("ShopCtrl", [
  '$scope', '$http', '$location', '$routeParams', "basketWorks",

  function($scope, $http, $location, $routeParams, basketWorks) {
      //lodash
      //how to pass this as dependency in app.js
    _ = window._;

  $http.get('/shop').success((response) => {
    $scope.shops = response.shops;
    $scope.user = response.user;
  });

  $scope.addBaskets = function(shop) {
    console.log("user is  correct  ", $scope.user._id);
    console.log("select company ", shop.company);
    console.log("shop selected ", shop);
    //if the user has not already basket-favored this store then they can click and basket count will increment
    const match = _.find(shop.basketVote, {'userId': $scope.user._id});
      if (match) {
        console.log("match ", match);
        console.log("you have already favored this shop");
      }
      if (!match) {
        console.log("no match? ", match);
        console.log("Thanks for liking me!");
        shop.baskets += 1;
        //put count on scope so it reflects the count right away:
        shop.basketVote.push({userId: $scope.user._id});
        console.log("new basketVote ", shop.basketVote);
        $http.put('/shop/'+ shop._id, {baskets: shop.baskets, userId: $scope.user._id}).success((response) => {
          console.log("need message to say you liked or have already liked");
        });
      }
  }

  $scope.seeComments = function(shop) {
    console.log("in see comments");
    basketWorks.setShop(shop);
    basketWorks.setUser($scope.user);
    // basketWorks.setAuthor($scope.user.firstName);
    $location.path('/comment');

  }

  $scope.logout = function(){
  // console.log("email ", $scope.email);
  // console.log("password ", $scope.password);
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
