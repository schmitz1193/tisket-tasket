var app = angular.module('MainApp', ['ui.router'])

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/partials/login.html',
      controller: 'LoginCtrl'
    })
    .state('shop', {
      url: '/shop',
      templateUrl: '/partials/shop.html',
      controller: 'ShopCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '/partials/admin.html',
      controller: 'AdminCtrl'
    })
    .state('comment', {
      url: '/comment',
      templateUrl: '/partials/comment.html',
      controller: 'CommentCtrl'
    });

  $urlRouterProvider.otherwise('login');
}]);
