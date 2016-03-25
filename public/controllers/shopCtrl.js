//This is the controller for the shop page
'use strict'
app.controller("ShopCtrl", [
  '$scope', '$http', '$location', '$routeParams', "basketWorks",

  function($scope, $http, $location, $routeParams, basketWorks) {
    //   //lodash
    //   //how to pass this as dependency in app.js
    _ = window._;

  $http.get('/shop').then((response) => {
    // console.log("response in shopctrl ", response.data.shops);
    $scope.shops = response.data.shops;
    $scope.user = response.data.user;
  });

  $scope.addBaskets = function(shop) {
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
        $http.put('/shop/'+ shop._id, {baskets: shop.baskets, userId: $scope.user._id})
        .then((response) => {
          console.log("need message to say you liked or have already liked");
        }, function(err) {
           console.log('ERRR while liking a shop!')
        });
      }
  }

  $scope.seeComments = function(shop) {
    basketWorks.setShop(shop);
    basketWorks.setUser($scope.user);
    $location.path('/comment');

  }

  $scope.logout = function(){
  console.log("I'm logging out ");
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
