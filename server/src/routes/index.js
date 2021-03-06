import express from 'express';
import controller from '../controllers';
import fieldValidationMiddleware from
  '../controllers/middleware/validators/fieldValidations';
import nullvalidationMiddleware from
  '../controllers/middleware/validators/nullValidation';
import decodeToken from '../controllers/middleware/authenticate';
import checkAdmin from '../controllers/middleware/checkAdmin';
import checkGoogleAuth from '../controllers/middleware/checkGoogleAuth';

const authdecodeToken = decodeToken.decodeToken;
const Router = express.Router();
const UserController = controller.User;
const BooksController = controller.Books;
const UserBooksController = controller.UserBooks;
const CategoryController = controller.Category;
const NotificationsController = controller.Notifications;


Router.get('/', (req, res) =>
  res.status(200).send({ message: 'Welcome to the Hello Books!' }));

Router.get('/auth/books/recentbooks', BooksController.getAllBooks);

Router.get('/auth/getuserlevellist', UserController.getUserLevelList);

Router.post(
  '/auth/users/signup',
  fieldValidationMiddleware,
  nullvalidationMiddleware,
  UserController.createUser
);

Router.post(
  '/auth/users/signin',
  checkGoogleAuth,
  nullvalidationMiddleware,
  UserController.signIn
);
Router.get('/admin/users/:userId', checkAdmin, UserController.getUser);

Router.post(
  '/admin/books',
  checkAdmin,
  nullvalidationMiddleware,
  BooksController.addBook
);

Router.put(
  '/admin/books/:bookId',
  checkAdmin,
  nullvalidationMiddleware,
  BooksController.updateBook
);

Router.get('/books/', BooksController.getAllBooks);

Router.post(
  '/users/loanbook',
  authdecodeToken,
  UserBooksController.loanBook
);

Router.put(
  '/users/returnbook',
  authdecodeToken,
  UserBooksController.returnBook
);

Router.get(
  '/users/getloanhistory',
  authdecodeToken,
  UserBooksController.getLoanHistory
);

Router.get(
  '/users/getoverduebooks',
  authdecodeToken,
  UserBooksController.getOverdueBooks
);

Router.get(
  '/users/borrowedbooks',
  authdecodeToken,
  UserBooksController.getBorrowedBookList
);

Router.post(
  '/admin/category',
  checkAdmin,
  nullvalidationMiddleware,
  CategoryController.addCategory
);

Router.delete(
  '/admin/category/:categoryId',
  checkAdmin,
  CategoryController.deleteCategory
);

Router.put(
  '/admin/category/:categoryId',
  checkAdmin,
  nullvalidationMiddleware,
  CategoryController.editCategory
);

Router.get(
  '/books/listcategories',
  authdecodeToken,
  CategoryController.listCategories
);

Router.get(
  '/books/category/:categoryId',
  authdecodeToken,
  CategoryController.displayBookwithCategories
);

Router.get('/books/search', authdecodeToken, BooksController.searchBooks);

Router.get('/auth/books/:bookId', BooksController.viewBookDetails);

Router.delete(
  '/admin/books/:bookId',
  authdecodeToken,
  checkAdmin,
  BooksController.deleteBook
);

Router.get(
  '/admin/notifications',
  authdecodeToken, checkAdmin,
  NotificationsController.displayNotification
);

Router.put(
  '/users/changepassword',
  authdecodeToken,
  nullvalidationMiddleware,
  UserController.changePassword
);

Router.put(
  '/admin/changeuserlevel',
  checkAdmin, nullvalidationMiddleware,
  UserController.changeLevel
);
Router.get('/admin/getuserlist', checkAdmin, UserController.getUserList);

export default Router;
