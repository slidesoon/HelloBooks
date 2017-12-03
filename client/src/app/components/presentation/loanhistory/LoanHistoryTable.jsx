import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Row } from 'react-materialize';
import MessageforNoBooksHistory from '../messages/dashboardMessages/MessageforNoBooksHistory.jsx';

/**
 * Table of Loan history
 * @param {Object} props props object containing books
 * @returns {JSX} JSX representation of Books table
 */
const BorrowHistoryTable = (props) => {
  const rows = props.books && props.books.length ? props.books.map((book, index) => (
    <tr key={index}>
      <td className="book-cover-on-table"><img src={book.book.bookImage || 'N/A'} alt={book.book.title} /></td>
      <td>{moment(book.createdAt).format('LL') || 'N/A'}</td>
      <td>{moment(book.returndate).format('LL') || 'N/A'}</td>
      <td>{book.userReturndate ? moment(book.userReturndate).format('LL') || 'N/A' : '-'}</td>
      <td>{book.returnstatus ? 'Returned' : 'Still Out on Loan'}</td>
      <td> {(moment(book.returndate) < moment() && book.returnstatus === false) ? <div className="overdue">Overdue</div> : '-'}</td>
    </tr>
  )) : null;
  return (rows ?
    <Row>
      <div className="center loanhistory-table">
        <table className="centered highlight bordered history-table">
          <thead>
            <tr className="loan-header">
              <th>Book</th>
              <th>Date Borrowed</th>
              <th>Date To Be Returned</th>
              <th>User Return Date</th>
              <th>Status</th>
              <th>Overdue</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </Row> :
    <MessageforNoBooksHistory />
  );
};

BorrowHistoryTable.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired
  })).isRequired,
};


export default BorrowHistoryTable;
