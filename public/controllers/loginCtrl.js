//This is the controller for the login/mission statement page

'use strict'
app.controller("LoginCtrl", [
  '$scope', "$http", "$location",

  function($scope, $http, $location){

    $scope.errMessage = false;

    $scope.login = function(){
      $http
        .post('/login', {email: $scope.email, password: $scope.password})
        .then((response) => {
          $location.path('/shop');
        }, function(err) {
          console.log('ERRR!')
          $scope.errMessage = true;
          $location.path('/')
        })
      }

    }
]);
