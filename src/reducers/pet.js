import { ADD_PETS } from '../actions';

const pets = (pets = [], action) => {
  if (action.type === ADD_PETS) {
    return action.payload.pets;
  }
  return pets;
};

export default pets;
