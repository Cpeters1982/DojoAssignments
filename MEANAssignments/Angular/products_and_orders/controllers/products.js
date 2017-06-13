module.exports = function(app){
  app.controller('productsController', ['$scope', 'productFactory', function($scope, productFactory){

    $scope.products = []

    productFactory.getProducts(function(data){
      $scope.products = data
    })

    $scope.addProduct = function(){
      productFactory.createProduct($scope.newProduct, function(data){
        $scope.products = data
        $scope.newProduct = {}
      })

    }
    $scope.removeProduct = function(index){
      productFactory.deleteProduct(index, function(data){
        $scope.products = data
      })
    }

  }])
}
