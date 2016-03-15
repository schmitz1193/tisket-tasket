//This is the controller for the shop page
'use strict'
app.controller("ShopCtrl", [
  '$scope',

  function($scope){
      console.log("I'm SHOPPING");
      $scope.shops = [
    {title: 'Arnie"s',
     image: "../images/Arnies.png",
     baskets: 5,
     link: "http://www.arnies.com/mm5/merchant.mvc?Screen=SFNT",
     commentCount: 3,
     comments: [
        {author: 'Hillary', body: 'Women should rule!', upvotes: 0},
        {author: 'Bill', body: 'What she said!', upvotes: 0},
        {author: 'me', body: 'FYI not May id', upvotes: 0}
               ]},
    {title: 'shop 2', baskets: 2,},
    {title: 'shop 3', baskets: 15},
    {title: 'shop 4', baskets: 9},
    {title: 'shop 5', baskets: 4}
  ];

  console.log("shops ", $scope.shops);

  $scope.addBaskets = function(shop) {
    //if the user has not already basket-favored this store then they can click and basket count will increment
    console.log("title? ", shop.title);
    console.log("baskets? ", shop.baskets);
    shop.baskets += 1;
    console.log("count?? ", shop.baskets);
  }

  }
]);
