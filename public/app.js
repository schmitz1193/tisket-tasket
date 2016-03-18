var app = angular.module('MainApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/partials/login.html',
      controller: 'LoginCtrl'
    })
    .when('/register',{
      templateUrl: '/partials/register.html',
      controller: 'RegisterCtrl'
    })
    .when('/shop', {
      templateUrl: '/partials/shop.html',
      controller: 'ShopCtrl'
    })
    .when('/admin', {
      templateUrl: '/partials/admin.html',
      controller: 'AdminCtrl'
    })
    .when('/comment', {
      templateUrl: '/partials/comment.html',
      controller: 'CommentCtrl'
    })
    .otherwise({
      redirectTo: '/login'
    });
});


