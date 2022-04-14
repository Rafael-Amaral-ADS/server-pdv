const { Router } = require('express');

const routes = Router();

const UserController = require('../controllers/UserController');
const SessionController = require('../controllers/LoginController');
const ProductController = require('../controllers/ProductController');
const SaleController = require('../controllers/SaleController');

const { authenticate } = require('../middlewares');

routes.get('/', (req, res) => {
    res.send('Olá Mundo!')
});

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.getUsers);

routes.post('/sessions', SessionController.createSession);

routes.get('/users/:user_id', UserController.getUserById);
routes.patch('/users/:user_id', authenticate, UserController.updateUser);
routes.delete('/users/:user_id', authenticate, UserController.deleteUser);

routes.post('/products/:user_id', authenticate, ProductController.createProduct);
routes.get('/products', ProductController.getProducts);

routes.get('/products/:product_id', ProductController.getProductById);
routes.patch('/products/:user_id/:product_id', authenticate, ProductController.updateProduct);
routes.delete('/products/:user_id/:product_id', authenticate, ProductController.deleteProduct);

routes.post('/sales/:user_id', authenticate, SaleController.createSale);
routes.get('/sales/:user_id', authenticate, SaleController.getSalesUser);
routes.get('/sales/:user_id/:sale_id', authenticate, SaleController.getSale);

module.exports = routes;