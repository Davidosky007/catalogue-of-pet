import { FILTER_GENDER, FILTER_PETS, FILTER_SIZE } from '../actions';

const filterPet = (state = 'All', action) => {
  if (action.type === FILTER_PETS) {
    return { state, breed: action.payload.breed };
  }

  if (action.type === FILTER_SIZE) {
    return { state, size: action.payload.size };
  }

  if (action.type === FILTER_GENDER) {
    return { state, gender: action.payload.gender };
  }

  return state;
};

export default filterPet;
