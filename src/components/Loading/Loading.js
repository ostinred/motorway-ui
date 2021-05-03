import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Loading = ({ isLoading }) => {
  return (
    <div className={`loader ${isLoading ? 'is-visible' : ''}`}>
      <div className="loader-spinner" />
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export { Loading };
