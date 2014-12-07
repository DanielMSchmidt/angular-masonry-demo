'use strict';

function genLoremPixelUrl() {
    var height = ~~(Math.random() * 500) + 100;
    var id = ~~(Math.random() * 10000);
    return 'http://lorempixel.com/g/280/' + height + '/?' + id;
};

angular.module('nonImageContentApp')
  .controller('ImageCtrl', function ($scope) {

    $scope.title = 'Image Bricks';

    $scope.bricks = [
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' },
      { content: '<img src="'+ genLoremPixelUrl() +'" alt="A masonry brick" />' }
    ];
  });
