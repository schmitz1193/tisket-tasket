//This is the controller for the Admin page
//You must have admin credentials to add a shopping website to the database
'use strict'
app.controller("AdminCtrl", [
  '$scope', "$http", "$location",

  function($scope, $http, $location){
    console.log("I'm in charge of shops!");

     $scope.addWebsite = function() {
      console.log("company ", $scope.company);
      console.log("link ", $scope.link);
      $http.post('/admin', {company: $scope.company, link: $scope.link}).success((response) => {
        console.log("show me the new company! ", response);
        $location.path('/shop');
      });
    }
  }
]);
