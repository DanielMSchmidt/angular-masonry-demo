'use strict';

function genLoremPixelUrl() {
    var height = ~~(Math.random() * 500) + 100;
    var id = ~~(Math.random() * 10000);
    return 'http://lorempixel.com/g/280/' + height + '/?' + id;
};

angular.module('nonImageContentApp')
  .controller('ImageCtrl', function ($scope) {
    var arr = [];

    for (var i = 0; i < 10; i++) {
      arr.push({src: genLoremPixelUrl()})
    };

    $scope.bricks = arr;
  });
