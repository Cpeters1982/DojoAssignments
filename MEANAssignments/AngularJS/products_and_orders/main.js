var app = require('./modules/app')

var setupProductFactory = require('./factories/product');
setupProductFactory(app);

var setupProductsController = require('./controllers/products')
setupProductsController(app);

var setupOrdersController = require('./controllers/orders')
setupOrdersController(app);
