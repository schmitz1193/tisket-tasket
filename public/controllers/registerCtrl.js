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
                               lastName: $scope.lastName,
                               admin: false,
                               verify: $scope.verify})
                              .then((response) => {
        console.log("response ", response.message);
         if (response.message === '1') {
           console.log("this email exists");
           $location.path('/login');
         }
         if (response.message === '2') {
           console.log("created user");
           $location.path('/login');
         }
         if (response.message === '3') {
           console.log("passwords do not match");
           $location.path('/register');
         }
         if (response.message > '3') {
           console.log("where did we go?");
           $location.path('/login');
         }
      }, function(err) {
          console.log('ERRR!')
          $scope.errMessage = true;
          $location.path('/')
        });
    }
  }
]);
