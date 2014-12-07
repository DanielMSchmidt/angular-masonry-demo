'use strict';

/**
 * @ngdoc function
 * @name nonImageContentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nonImageContentApp
 */
angular.module('nonImageContentApp')
  .controller('ImageCtrl', function ($scope) {

    $scope.title = 'Image Bricks';
    $scope.bricks = [
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' },
      { content: '<img src="http://lorempixel.com/500/500/" alt="A masonry brick" />' }
    ];
  });
