//This is the controller for the login/mission statement page

'use strict'
app.controller("LoginCtrl", [
  '$scope', "$http", "$location",

  function($scope, $http, $location){

    $scope.errMessage = false;

    $scope.login = function(){
      console.log("email ", $scope.email);
      console.log("password ", $scope.password);

      $http
        .post('/login', {email: $scope.email, password: $scope.password})
        .success((response) => {
          console.log("show me the db login ", response);
          $location.path('/shop');
        }, function(err) {
          console.log('ERRR!')
          $scope.errMessage = true;
          $location.path('/')
        })

    }
  }
]);
