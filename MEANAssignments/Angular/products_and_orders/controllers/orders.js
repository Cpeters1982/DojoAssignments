module.exports = function(app){
  app.controller('ordersController', ['$scope', 'productFactory', function($scope, productFactory){

    $scope.products = []

    productFactory.getProducts(function(data){
      $scope.products = data
    })

    $scope.buyProduct = function(index){
      productFactory.subtractQty(index, function(data){
        $scope.products = data
      })
    }

  }])
}
