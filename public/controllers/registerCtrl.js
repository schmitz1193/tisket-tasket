//This is the controller for the register/mission statement page

'use strict'
app.controller("RegisterCtrl", [
  '$scope', "$http", "$location",

  function($scope, $http, $location){

    $scope.register = function(){
      console.log("I am going to register");
      console.log("email ", $scope.email);
      console.log("password ", $scope.password);
      console.log("first ", $scope.firstName);
      console.log("last ", $scope.lastName);
      $http.post('/register', {email: $scope.email,
                               password: $scope.password,
                               firstName: $scope.firstName,
                               lastName: $scope.lastName
                              }).success((response) => {
        console.log("Added new user ", response);
        $location.path('/shop');
        });
      }
    }
]);
