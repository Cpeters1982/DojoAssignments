(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){

module.exports = function(app){
  app.factory('productFactory', function(){

    var factory = {}

    var products = [
      {name:"Keyboard", price:149.99, qty:50},
      {name:"Mouse", price:59.99, qty:50},
      {name:"Basketball", price:59.99, qty:50},
    ]

    factory.getProducts = function(callback){
      callback(products);
    }

    factory.createProduct = function(newProduct, callback){
      newProduct.qty = 50;
      products.push(newProduct);
      callback(products);
    }
    factory.deleteProduct = function(index, callback){
      products.splice(index, 1);
      callback(products);
    }
    factory.subtractQty = function(index, callback){
      products[index].qty -= 1;
      callback(products);
    }

    return factory


  })

}

},{}],4:[function(require,module,exports){
var app = require('./modules/app')

var setupProductFactory = require('./factories/product');
setupProductFactory(app);

var setupProductsController = require('./controllers/products')
setupProductsController(app);

var setupOrdersController = require('./controllers/orders')
setupOrdersController(app);

},{"./controllers/orders":1,"./controllers/products":2,"./factories/product":3,"./modules/app":5}],5:[function(require,module,exports){
var app = angular.module('app', []);

module.exports = app;

},{}]},{},[4]);
