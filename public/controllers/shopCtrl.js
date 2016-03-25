//This is the controller for the shop page
'use strict'
app.controller("ShopCtrl", [
  '$scope', '$http', '$location', '$routeParams', "basketWorks",

  function($scope, $http, $location, $routeParams, basketWorks) {
    //   //lodash
    //   //how to pass this as dependency in app.js
    _ = window._;

  $http.get('/shop').then((req, res) => {
    $scope.shops = req.data.shops;
    $scope.user = req.data.user;
  });

  $scope.addBaskets = function(shop) {
    //if the user has not already basket-favored this store then they can click and basket count will increment
    const match = _.find(shop.basketVote, {userId: $scope.user._id});
      if (match) {
        console.log("match ", match);
        shop.basketMsg = "You have already liked this shop!";
      }
      if (!match) {
        console.log("no match? ", match);
        shop.baskets += 1;
        //put count on scope so it reflects the count right away:
        shop.basketVote.push({userId: $scope.user._id});
        $http.put('/shop/'+ shop._id, {baskets: shop.baskets, userId: $scope.user._id})
        .then((response) => {
          shop.basketMsg = "Thanks for liking me!";
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
      $location.path('/login');
    }, function(err) {
      console.log('ERRR!')
      $scope.errMessage = true;
      $location.path('/login')
    })
  }

}]);
