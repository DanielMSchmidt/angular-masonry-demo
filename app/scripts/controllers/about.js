'use strict';

/**
 * @ngdoc function
 * @name nonImageContentApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nonImageContentApp
 */
angular.module('nonImageContentApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
