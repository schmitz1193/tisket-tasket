//This is the controller for the shop page
'use strict'
app.controller("ShopCtrl", [
  '$scope',

  function($scope){
      console.log("I'm SHOPPING");
      $scope.shops = [
    {title: 'Arnie"s',
     image: "../images/Arnies.png",
     hearts: 5,
     link: "http://www.arnies.com/mm5/merchant.mvc?Screen=SFNT",
     comments: [
        {author: 'Hillary', body: 'Women should rule!', upvotes: 0},
        {author: 'Bill', body: 'What she said!', upvotes: 0},
        {author: 'me', body: 'FYI not May id', upvotes: 0}
               ]},
    {title: 'shop 2', hearts: 2,},
    {title: 'shop 3', hearts: 15},
    {title: 'shop 4', hearts: 9},
    {title: 'shop 5', hearts: 4}
  ];

  // $scope.shops = "ARNIES";
  console.log("shops ", $scope.shops);

  }
]);
