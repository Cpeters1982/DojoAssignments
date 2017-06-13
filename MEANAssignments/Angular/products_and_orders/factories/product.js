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
