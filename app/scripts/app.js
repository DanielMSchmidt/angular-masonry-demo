'use strict';

/**
 * @ngdoc overview
 * @name nonImageContentApp
 * @description
 * # nonImageContentApp
 *
 * Main module of the application.
 */
angular
  .module('nonImageContentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'wu.masonry'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/no-image', {
        templateUrl: 'views/masonry.html',
        controller: 'NoImageCtrl'
      })
      .when('/image', {
        templateUrl: 'views/masonry.html',
        controller: 'ImageCtrl'
      })
      .otherwise({
        redirectTo: '/no-image'
      });
  });
