'use strict'
app.controller("LoginCtrl", [
  '$scope',

  function($scope){

    $scope.login = function(){
      console.log("email? ", $scope.email);
    }
    // $scope.test = 'Did I make it?';
    console.log("coming from loginctrl");

  }
]);
