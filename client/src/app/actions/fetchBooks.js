import {
  FETCH_ALL_RECENT_BOOKS,
  FETCH_ALL_BOOKS,
  FETCH_BOOKS_REJECTED,
  FETCH_BORROWED_BOOKS,
  FETCH_ALL_OVERDUE_BOOKS,
  FETCH_SELECTED_BOOK_FAILURE,
  FETCH_SELECTED_BOOK_SUCCESS
} from './actionType';
import api from './api';

export const fetchBooksRejected = error => ({
  type: FETCH_BOOKS_REJECTED,
  error
});
export const fetchRecentBooks = books => ({
  type: FETCH_ALL_RECENT_BOOKS,
  books
});
export const fetchBooks = books => ({
  type: FETCH_ALL_BOOKS,
  books
});
export const fetchBorrowedBooks = books => ({
  type: FETCH_BORROWED_BOOKS,
  books
});
export const fetchOverdueBooks = books => ({
  type: FETCH_ALL_OVERDUE_BOOKS,
  books
});
export const fetchSelectedBookSuccess = book => ({
  type: FETCH_SELECTED_BOOK_SUCCESS,
  book
});
export const fetchSelectedBookFailure = error => ({
  type: FETCH_SELECTED_BOOK_FAILURE,
  error
});

/**
 * async helper function: log in user
 *
 * @function fetchAllBooks
 *
 * @param {integer} offset
 *
 * @param {integer} limit
 *
 * @returns {function} asynchronous action
 */
export const fetchAllBooks = (offset, limit) => dispatch => api
  .book
  .fetch(offset, limit)
  .then((response) => {
    dispatch(fetchBooks(response));
    return response;
  })
  .catch((error) => {
    dispatch(fetchBooksRejected({ error }));
  });

  /**
 * async helper function: log in user
 *
 * @function fetchOverdueBooks
 *
 * @param {integer} offset
 *
 * @param {integer} limit
 *
 * @returns {function} asynchronous action
 */
export const fetchOverdueBookstoDashboard = (offset, limit) => dispatch => api
  .book
  .fetchOverdueBooks(offset, limit)
  .then((response) => {
    dispatch(fetchOverdueBooks(response));
  })
  .catch((error) => {
    dispatch(fetchBooksRejected({ error }));
  });


/**
 * async helper function: fetch books to go on the dashboard
 * @function fetchBooksforDashboard
 * @param {integer} offset
 * @param {integer} limit
 * @returns {function} asynchronous action
 */
export const fetchAllRecentBooks = (offset, limit) => dispatch => api
  .book
  .fetchRecentBooks(offset, limit)
  .then((response) => {
    dispatch(fetchRecentBooks(response));
  })
  .catch((error) => {
    dispatch(fetchBooksRejected({ error }));
  });

/**
 * async helper function:fetch books by Id
 *
 * @function fetchAllBorrowedooks
 *
 * @param {object} offset
 *
 * @param {object} limit
 *
 * @returns {function} asynchronous action
 */
export const fetchAllBorrowedBooks = (offset, limit) => dispatch => api
  .book
  .fetchBooksByUserId(offset, limit)
  .then((response) => {
    dispatch(fetchBorrowedBooks(response));
  })
  .catch((error) => {
    dispatch(fetchBooksRejected({ error }));
  });
  /**
 * async helper function:fetch selected book
 *
 * @function fetchSelectedBook
 *
 * @param {number} bookId
 *
 * @returns {function} asynchronous action
 */
export const fetchSelectedBook = bookId => dispatch => api
  .book
  .fetchSelectedBookById(bookId)
  .then((response) => {
    dispatch(fetchSelectedBookSuccess(response));
  })
  .catch((error) => {
    dispatch(fetchSelectedBookFailure({ error }));
  });

