import React from 'react';
import PropTypes from 'prop-types';
import { Preloader } from 'react-materialize';

const Loader = ({ records, callback }) => {
  if (!records) {
    return (<Preloader size="big" />);
  }
  callback();
};

Loader.propTypes = {
  records: PropTypes.object,
  callback: PropTypes.oneOfType([
    PropTypes.object
  ])
};

export default (Loader);
