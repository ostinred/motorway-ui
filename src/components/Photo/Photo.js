import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Photo = ({
  index,
  id,
  alt_description,
  url,
  user,
  description,
  likes,
  onPhotoClick,
}) => {
  return (
    <figure onClick={() => onPhotoClick(id)} tabIndex={index} className="photo">
      <img className="photo-image" src={url} alt={alt_description} />
      <figcaption className="photo-description">
        <span>{description}</span>
      </figcaption>

      <div className="photo-info">
        <div className="photo-user">
          <img className="photo-avatar" src={user.profile_image} alt="" />
          <p className="photo-username">{user.username}</p>
        </div>
        {likes ? <p>&#10084;&#65039; {likes}</p> : <div />}
      </div>
    </figure>
  );
};

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  alt_description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  likes: PropTypes.number.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
  }),
};

export { Photo };
