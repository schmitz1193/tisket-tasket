//This is the controller for the register/mission statement page

'use strict'
app.controller("RegisterCtrl", [
  '$scope', "$location",

  function($scope, $location){

    $scope.register = function(){
      console.log("I am going to register");
      console.log("email ", $scope.email);
      console.log("password ", $scope.password);
      console.log("first ", $scope.firstName);
      console.log("last ", $scope.lastName);
    }
  }
]);
