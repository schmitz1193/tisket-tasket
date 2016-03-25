//This is the controller for the register

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
        console.log("response ", response);
           $location.path('/login');
      }, function(err) {
          console.log('ERRR!', err)
          $scope.errMessage = true;
          if (err.status === 409) {
            $scope.registerErr = "Email already exists";
          } else {
            if (err.status === 400) {
            $scope.registerErr = "Passwords do not match";
            } else {
              $scope.registerErr = "Error registering, please try again";
              } }
          $location.path('/register')
        });
    }
  }
]);
