//This is the controller for the login/mission statement page

'use strict'
app.controller("LoginCtrl", [
  '$scope', "$http", "$location",

  function($scope, $http, $location){

    $scope.login = function(){
      console.log("email ", $scope.email);
      console.log("password ", $scope.password);

      $http.post('/login').success((response) => {
        console.log("show me the db login ", response);
        // $scope. = response;
  });

      //****I need some validation here from db!!
      // change the path
      //if valid && admin go to admin.html
      // const admin = false;

      // If (admin === true) {
      //   $location.path('/admin');
      // } else {
      // //if valid && admin go to shop.html
        $location.path('/shop');
        // }
      //if invalid err msg
      //if register show register info
    console.log("coming from loginCtrl.js");
    }
  }
]);
