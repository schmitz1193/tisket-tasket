var app = angular.module('MainApp', ['ui.router'])

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/partials/login.html',
      controller: '/controllers/loginCtrl'
    });
    // .state('posts', {
    //   url: '/posts/{id}',
    //   templateUrl: '/posts.html',
    //   controller: 'PostsCtrl'
    // });

  $urlRouterProvider.otherwise('login');
}]);
