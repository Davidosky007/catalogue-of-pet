import { connect } from 'react-redux';
import {
  fetchPets, FilterGender, filterSize, filterPets,
} from '../actions/index';
import SearchPets from '../components/SearchPets';

const mapStateToProps = (state) => ({
  pets: state.pets,
  filter: state.filter.breed,
  size: state.filter.size,
  gender: state.filter.gender,
});

const mapStateToDispatch = (dispatch) => ({
  
})