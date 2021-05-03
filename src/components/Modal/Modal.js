import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Modal = ({ onClose, img }) => {
  return (
    <div className={`modal ${img ? 'is-visible' : ''}`}>
      {img ? (
        <>
          <button className="modal-close" type="button" onClick={onClose}>
            ✖
          </button>
          <img className="modal-img" src={img.url} alt={img.alt_description} />
        </>
      ) : null}
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.shape({
    alt_description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export { Modal };
