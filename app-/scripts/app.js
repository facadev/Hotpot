'use strict';

angular.module('yeomanIonicAngularPhonegapSeedApp', [
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'ui.router',
  'ionic'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $stateProvider
  .state('start', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  });
}])

.run(['$ionicPlatform', function($ionicPlatform) {

  $ionicPlatform.ready(function () {
    /*global navigator*/
    if (navigator && navigator.splashscreen) {
      navigator.splashscreen.hide();
    }
  });

}]);
