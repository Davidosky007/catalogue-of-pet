import { connect } from 'react-redux';
import {
  fetchPets, filterGender, filterSize, filterPets,
} from '../actions/index';
import SearchPets from '../components/SearchPets';

const mapStateToProps = (state) => ({
  pets: state.pets,
  filter: state.filter.breed,
  size: state.filter.size,
  gender: state.filter.gender,
});

const mapStateToDispatch = (dispatch) => ({
  fetchPets: (animals) => dispatch(fetchPets(animals)),
  filterPets: (breed) => dispatch(filterPets(breed)),
  filterSize: (size) => dispatch(filterSize(size)),
  filterGender: (gender) => dispatch(filterGender(gender)),
});

export default connect(mapStateToProps, mapStateToDispatch)(SearchPets);
