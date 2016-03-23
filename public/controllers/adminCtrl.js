//This is the controller for the Admin page
//You must have admin credentials to add a shopping website to the database
'use strict'
app.controller("AdminCtrl", [
  '$scope', "$http", "$location",

  function($scope, $http, $location){
    console.log("I'm in charge of shops!");

     $scope.addWebsite = function() {
      $http.post('/admin', {company: $scope.company, link: $scope.link, image: $scope.image})
      .success((response) => {
        console.log("show me the new company! ", response);
        $location.path('/shop');
      });
    }

    $scope.logout = function(){
    // console.log("email ", $scope.email);
    // console.log("password ", $scope.password);
    console.log("I'm logging out ");
    $http
      .delete('/login')
      .success((response) => {
        console.log("have I logged out?");
        $location.path('/login');
      }, function(err) {
        console.log('ERRR!')
        $scope.errMessage = true;
        $location.path('/login')
      })
    }

  }
]);
