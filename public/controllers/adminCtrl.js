//This is the controller for the Admin page
//You must have admin credentials to add a shopping website to the database
'use strict'
app.controller("AdminCtrl", [
  '$scope',

  function($scope){
    console.log("I'm in charge of shops!");


     $scope.addWebsite = function() {
      console.log("company ", $scope.company);
      console.log("link ", $scope.link);
      // console.log("image ", $scope.image);

      //now this data needs to be sent to the server  to add to the db
    }
  }
]);
