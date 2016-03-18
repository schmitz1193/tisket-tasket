//This is the controller for the shop page
'use strict'
app.controller("ShopCtrl", [
  '$scope', '$http', '$location', '$routeParams',

  function($scope, $http, $location, $routeParams){

    console.log("I'm SHOPPING");
  //   $scope.shops = [
  //   {company: 'Arnie"s',
  //    image: "../images/Arnies.png",
  //    baskets: 5,
  //    link: "http://www.arnies.com/mm5/merchant.mvc?Screen=SFNT",
  //    commentCount: 3,
  //    comments: [
  //       {author: 'Hillary', body: 'Women should rule!', upvotes: 0},
  //       {author: 'Bill', body: 'What she said!', upvotes: 0},
  //       {author: 'me', body: 'FYI not May id', upvotes: 0}
  //              ]},
  //   {company: 'shop 2', baskets: 2,},
  //   {company: 'shop 3', baskets: 15},
  //   {company: 'shop 4', baskets: 9},
  //   {company: 'shop 5', baskets: 4}
  // ];

  $http.get('/shop').success((response) => {
    console.log("show me the db shop ", response);
    $scope.shops = response;
  });

  //console.log("shops ", $scope.shops);

  $scope.addBaskets = function(shop) {
    //if the user has not already basket-favored this store then they can click and basket count will increment
    console.log("company? ", shop.company);
    console.log("baskets? ", shop.baskets);
    shop.baskets += 1;
    console.log("count?? ", shop.baskets);
  }

  }
]);
