var productControllers = angular.module('productControllers', ['ngAnimate']);

productControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/products.json').success(function(data) {
    console.log(data);
    $scope.products = data;
    $scope.productOrder = 'productName';
  });
}]);

productControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/products.json').success(function(data) {
    $scope.products = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.products.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

