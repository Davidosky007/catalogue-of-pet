import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import petFinder from '../helpers/petFinderApi';

const Details = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const [media, setMedia] = useState('');
  const [description, setDescription] = useState('');

  useEffect(async () => {
    const { animal } = await petFinder.animal
      .show(id)
      .then((data) => data.data);

    setUrl(animal.url);
    setName(animal.name);
    setAnimal(animal.type);
    setLocation(
      `${animal.contact.address.city},${animal.contact.address.state}`,
    );
    setBreed(animal.breeds.primary);
    setMedia(animal.photos);
    setDescription(animal.description);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <h1 className="loading__wrapper" data-testid="details-loading">
        Loading....
      </h1>
    );
  }

  let hero = 'http://placecorgi.com/300/300';

  if (media.length !== 0) {
    hero = media[0].large;
  }

  const home = () => navigate('/');
  const adopt = () => navigate(url);

  return (
    <div className="pets__details-wrapper">
      <div className="pets__details-wrapper-image">
        <img src={hero} alt="" />
      </div>
      <div className="pets__details-wrapper-box">
        <h1>{name}</h1>
        <h3>{`🏡 ${location}`}</h3>
        <h4>{`${animal}⭐${breed}`}</h4>
        <h2>{`Meet ${name}🎉`}</h2>
        <p>{`👀 ${description}`}</p>
        <button type="button" onClick={adopt}>
          {`Adopt ${name}`}
        </button>
        <button type="button" onClick={home}>
          Back to home
        </button>
      </div>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number,
};

Details.propTypes = {
  id: PropTypes.any, // eslint-disable-line
};

export default Details;
