//This is the controller for the shop page
'use strict'
app.controller("ShopCtrl", [
  '$scope', '$http', '$location', '$routeParams', "basketWorks",

  function($scope, $http, $location, $routeParams, basketWorks) {
      //lodash
      //how to pass this as dependency in app.js
    _ = window._;


  //   console.log("I'm SHOPPING");
  //   $scope.shops = [
  //   {company: 'Arnie"s',
  //    image: "../images/Arnies.png",
  //    baskets: 5,
  //    basketVote: [
  //        {userId: '56ead0cc5299a69551a849ca'}],
  //    link: "http://www.arnies.com/mm5/merchant.mvc?Screen=SFNT",
  //    commentCount: 3,
  //    comments: [
  //       {firstName: 'Hillary', text: 'Women should rule!'},
  //       {author: 'Bill', body: 'What she said!', upvotes: 0},
  //       {author: 'me', body: 'FYI not May id', upvotes: 0}
  //              ]},
  //   {company: 'shop 2', baskets: 2,},
  //   {company: 'shop 3', baskets: 15},
  //   {company: 'shop 4', baskets: 9},
  //   {company: 'shop 5', baskets: 4}
  // ];

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
          console.log("will I ever make it here?");
        });
      }
  }

  $scope.seeComments = function(shop) {
    console.log("in see comments");
    basketWorks.setShop(shop);
    basketWorks.setUser($scope.user._id);
    basketWorks.setAuthor($scope.user.firstName);
    $location.path('/comment');

  }
}]);
