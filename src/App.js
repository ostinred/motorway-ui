import React, { useEffect, useState } from 'react';
import { Modal } from './components/Modal';
import { Photo } from './components/Photo';
import { Form } from './components/Form';
import { Loading } from './components/Loading';
import './App.scss';

const LIMIT = 10;
const SCROLL_TRIGGER = 300;

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fullScreenImg, setFullScreenImg] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`images?limit=${LIMIT}&skip=${page * LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setImages((prevState) => [...prevState, ...data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    const handleScroll = (event) => {
      const target = event.target.scrollingElement;
      if (
        target.scrollHeight - target.scrollTop - target.clientHeight <
          SCROLL_TRIGGER &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const openModal = (id) => {
    const img = images.find((item) => item.id === id);

    if (img) {
      setFullScreenImg(img);
    }
  };

  const onCloseModal = () => {
    setFullScreenImg(undefined);
  };

  return (
    <>
      <div className={`app ${fullScreenImg ? 'is-fixed' : ''}`}>
        <div className="photos">
          {images?.map((img, index) => (
            <Photo
              {...img}
              index={index + 1}
              key={img.id + index}
              onPhotoClick={openModal}
            />
          ))}
        </div>
      </div>

      <Loading isLoading={loading} />

      <Modal img={fullScreenImg} onClose={onCloseModal} />
      <Form />
    </>
  );
};

export default App;
