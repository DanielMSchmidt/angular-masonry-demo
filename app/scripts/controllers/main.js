'use strict';

/**
 * @ngdoc function
 * @name nonImageContentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nonImageContentApp
 */
angular.module('nonImageContentApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
