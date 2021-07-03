import PropTypes from 'prop-types';
import Pet from './Pet';

const PetsList = ({ pets }) => (
  <div className="pets__wrapper" data-testid="pets-list-id">
    {pets.length === 0 ? (
      <h1 className="loading__wrapper">No pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pet id={pet.id} name={pet.name} key={pet.id} media={pet.photos} />
      ))
    )}
  </div>
);

PetsList.propTypes = {
  pets: PropTypes.array, // eslint-disable-line
};

PetsList.defaultProps = {
  pets: [],
};

export default PetsList;
