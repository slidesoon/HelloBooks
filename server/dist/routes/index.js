'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _controllers = require('../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = _controllers2.default.User;
var BooksController = _controllers2.default.Books;
var UserBooksController = _controllers2.default.UserBooks;

exports.default = function (app) {
  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Welcome to Hello Books
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: Welcome to Hello Books Library
   */
  app.get('/api', function (req, res) {
    return res.status(200).send({
      message: 'Welcome to the Hello Books!'
    });
  });

  app.post('/api/users/signup', UserController.create);
  app.post('/api/users/signin', UserController.signin);
  app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
      // verifies secret and checks exp
      _jsonwebtoken2.default.verify(token, 'superSecret', function (err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        }
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided. Did you specify your secret message'
      });
    }
  });
  // if  user selects a different route and is not authenticated redirect him
  // number of copies
  //admin
  app.post('/api/books', BooksController.create);
  app.put('/api/books/:bookId', BooksController.update);
  app.get('/api/books/', BooksController.getAllBooks);
  app.get('/api/users/:userId/books', UserBooksController.getborrowerslist);
  app.post('/api/users/:userId/books', UserBooksController.loanbook);
  app.put('/api/users/:userId/books', UserBooksController.returnbook);
};