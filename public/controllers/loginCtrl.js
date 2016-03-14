//This is the controller for the login/mission statement page

'use strict'
app.controller("LoginCtrl", [
  '$scope', "$location",

  function($scope, $location){

    $scope.login = function(){
      console.log("email ", $scope.email);
      console.log("password ", $scope.password);
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
